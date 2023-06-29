import { XMLParser } from 'fast-xml-parser';
import moment from 'moment';

export const convertXMLtoJSON = ( xmlString ) => {
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

    const parser = new XMLParser( options );
    return parser.parse( xmlString );
};

export const formatDate = ( originalDate ) => {
    const formatDate = moment( originalDate ).format( 'DD/MM/YYYY' );
    return formatDate;
};

export const removeSlashes = ( str ) => {
    return str.replace( /\//g, '' );
};

export const secondsToMinutes = ( seconds ) => {
    if( typeof seconds === 'number' ){
      const hours = Math.floor( seconds / 3600 );
      const minutes = Math.floor( ( seconds % 3600 ) / 60 );
      const remainingSeconds = seconds % 60;

      const formattedHours = hours.toString().padStart( 2, '0' );
      const formattedMinutes = minutes.toString().padStart( 2, '0' );
      const formattedSeconds = remainingSeconds.toString().padStart( 2, '0' );

      if (hours > 0) {
        return `${ formattedHours }:${ formattedMinutes }:${ formattedSeconds }`;
      } else {
        return `${ formattedMinutes }:${ formattedSeconds }`;
      }
    }else {
      return seconds;
    }
  };