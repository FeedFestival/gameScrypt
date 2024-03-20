import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { attributesMapping, IMenuItem } from './models/iMenuItem';
import * as XLSX from 'xlsx';
import { of, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class MenuService {
	//
	private subject: Subject<any> = new Subject();
	workBook!: XLSX.WorkBook;

	private checkFirstRow = true;
	private _attributesMapping!: any;

	private apiKey = 'AIzaSyDPfW3IqPN4zrXiUAvV3N_s-khbJ-4Plxs';

	constructor(private http: HttpClient) {}

	private getSpreadsheetUrl(spreadsheetId: string, worksheetId: string) {
		return (
			'https://sheets.googleapis.com/v4/spreadsheets/' +
			spreadsheetId +
			'/values' +
			'/' +
			worksheetId +
			'?key=' +
			this.apiKey
		);
	}

	getLocalSheets(menuType: string = '') {
		const filename = environment.host + '/assets/brizzo_meniu' + menuType + '.xlsx';

		// https://www.mediafire.com/file/45kv2x7ecxr5v1w/brizzo_meniu.xlsx/file
		// const filename = 'https://download846.mediafire.com/964cdfgfk15g/45kv2x7ecxr5v1w/brizzo_meniu.xlsx';

		this.http
			.get(filename, { responseType: 'blob' })
			.subscribe((file: any) => {
				let fileReader = new FileReader();
				fileReader.onload = (e: any) => {
					// const arrayBuffer = fileReader.result;
					const data = new Uint8Array((fileReader.result as any));
					const arr = new Array();
					for (var i = 0; i != data.length; ++i)
						arr[i] = String.fromCharCode(data[i]);
					var bstr = arr.join('');
					this.workBook = XLSX.read(bstr, { type: 'binary' });
					//
					this.subject.next(this.workBook.SheetNames);
					// this.subject.complete();
				};
				fileReader.readAsArrayBuffer(file);
			});
		return this.subject.asObservable();
	}

	getSheets(spreadsheetId: string) {
		const url =
			'https://sheets.googleapis.com/v4/spreadsheets/' +
			spreadsheetId +
			'?key=' +
			this.apiKey;

		return this.http.get(url);
	}

	getLocalMenus(worksheetId: string) {

		if (worksheetId === 'VINURI_ROSII') {
			const x = 0;
		}

		const worksheet = this.workBook.Sheets[worksheetId];
		const jsonWorksheet = XLSX.utils.sheet_to_json(worksheet, {
			raw: true,
		});
		this._attributesMapping = attributesMapping;
		const items: any[] = [];
		jsonWorksheet.forEach((entry: any) => {
			const obj: any = {};
			this._attributesMapping.forEach((attr: any) => {
				obj[attr.model] = entry[attr.sheet];
			});
			items.push(obj);
		});
		return items;
	}

	getMenus(spreadsheetId: string, worksheetId: string = 'Sheet1') {
		this.checkFirstRow = true;
		const spreadsheetUrl = this.getSpreadsheetUrl(
			spreadsheetId,
			worksheetId
		);

		return this.http.get(spreadsheetUrl).pipe(
			map((jsonRes: any) => {
				console.log('', jsonRes);
				return jsonRes.values;
			}),
			map((entries) =>
				entries.map((entry: any) => {
					if (this.checkFirstRow) {
						this._attributesMapping = attributesMapping;

						for (var i = 0; i < entry.length; i++) {
							const aI = this._attributesMapping.findIndex(
								(a: any) => a.sheet === entry[i]
							);
							if (aI >= 0) {
								this._attributesMapping[aI].pos = i;
							}
						}
						this.checkFirstRow = false;
						return { _: '' };
					}

					const obj: any = {};

					this._attributesMapping.forEach((attr: any) => {
						obj[attr.model] = entry[attr.pos];
					});

					return obj;
				})
			)
		);
	}
}
