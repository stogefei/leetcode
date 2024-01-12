function* gen(x){
    var y = yield x + 4;
    return y;
  }
  
  var g = gen(1);
  console.log(g.next()) // { value: 3, done: false }
  console.log(g.next(2)) // { value: 2, done: true }

  const test = [
    {
        "key": "ShortText1705026510355",
        "type": 1,
        "options": {
            "name": "单行文本",
            "name_i18n": "",
            "visible": false,
            "dataItemName": "",
            "dataItemType": "",
            "dictionaryData": "",
            "widgetType": "",
            "tips": "",
            "displayFormula": "",
            "onChange": "",
            "requiredFormula": "",
            "readonlyCondition": "",
            "readonlyFormula": true,
            "defaultValue": "",
            "regexp": "",
            "regexpText": "",
            "placeholder": "请输入",
            "maxLength": "",
            "noRepeat": "",
            "dataLinkage": "",
            "shortTextStitch": "",
            "isScan": false,
            "labelVisible": true,
            "style": "",
            "span": "",
            "labelAlign": "left",
            "width": 150
        },
        "width": 96,
        "parentKey": "Sheet2222",
        "historyOpt": {
            "maxLength": 200,
            "regexp": "",
            "regexpText": "",
            "shortTextStitch": "",
            "noRepeat": "",
            "displayFormula": "",
            "readonlyCondition": "",
            "requiredFormula": ""
        }
    }
];

Object.keys(test).forEach((key, index) => {
    console.log(key, 'key');
    console.log(test[key], 'value');
})