import { Component } from "@angular/core";
import { ArticleComponent } from "../article.component";
import { ArticleFaq } from "../article.interfaces";

@Component({
    selector: "app-article-faq",
    templateUrl: "./article-faq.component.html",
    styleUrls: ["../article.component.scss"],
})
export class ArticleFaqComponent extends ArticleComponent {
    article: ArticleFaq;

    goToLink(url: string) {
        console.log("url: " + url);

    }
}
