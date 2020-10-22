export const NewUnityFile = {
    expanded: false,
    name: 'New Unity File',
    description: 'New file',
    code: `
using UnityEngine;
using System.Collections;

public class MainPlayer : MonoBehaviour {

    // Use this for initialization
    void Start () {

    }

    // Update is called once per frame
    void Update () {

    }
}
    `
};

export const percent_utils = {
    expanded: false,
    name: 'Percent Static Utils Class',
    description: 'Find out the percentage using this operations that are human talk expression.',
    code: `
public static class percent
{
    public static float Find(float _percent, float _of)
    {
        return (_of / 100f) * _percent;
    }
    public static float What(float _is, float _of)
    {
        return (_is * 100f) / _of;
    }
}
`,
    useInfo: true,
    useDescription: 'How to use:',
    codeUse: `
var p = percent.Find(_percent: 25, _of: 275);
`
};