import { XMLParser } from 'fast-xml-parser';
import moment from 'moment';

export const convertXMLtoJSON = (xmlString) => {
 // Opciones para el parser
    let options = {
        attributeNamePrefix: "@_",
        attrNodeName: "attr", //default is 'false'
        textNodeName : "#text",
        ignoreAttributes : false,
        ignoreNameSpace : false,
        allowBooleanAttributes : false,
        parseNodeValue : true,
        parseAttributeValue : false,
        trimValues: true,
        cdataTagName: "__cdata", //default is 'false'
        cdataPositionChar: "\\c",
        parseTrueNumberOnly: false,
        arrayMode: false, //"strict"
    };          

    const parser = new XMLParser(options);
    return parser.parse(xmlString);

};

export const deleteHTML = ( html ) => {
    var temporal = document.createElement("div");
    temporal.innerHTML = html;
    return temporal.textContent || temporal.innerText || "";
};

export const formatDate = (originalDate) => {
    const formatDate = moment(originalDate).format('DD/MM/YYYY');
    return formatDate;
};
