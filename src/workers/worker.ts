export const worker = "!function(e,r){for(var t in r)e[t]=r[t];r.__esModule&&Object.defineProperty(e,\"__esModule\",{value:!0})}(this,(()=>{\"use strict\";var e={747:(e,r)=>{Object.defineProperty(r,\"__esModule\",{value:!0}),r.LoadingPhase=r.MessageType=r.MessageProgress=r.Message=void 0;var t,I;r.Message=function(){},r.MessageProgress=function(e){var r=100/3;return r*e.phase+r*e.percent/100},(I=r.MessageType||(r.MessageType={}))[I.PROGRESS=0]=\"PROGRESS\",I[I.COMPLETED=1]=\"COMPLETED\",I[I.FAILED=2]=\"FAILED\",(t=r.LoadingPhase||(r.LoadingPhase={}))[t.DOWNLOADING=0]=\"DOWNLOADING\",t[t.READING=1]=\"READING\",t[t.LOADING=2]=\"LOADING\"},18:(e,r,t)=>{Object.defineProperty(r,\"__esModule\",{value:!0}),r.ProductMap=void 0;var I=t(486),a=function(){function e(){this.states=[]}return e.clone=function(r){var t=new e;return t.productID=r.productID,t.renderId=r.renderId,t.type=r.type,t.bBox=new Float32Array(r.bBox),t.spans=r.spans,t.states=r.states.slice(0),t},e.addState=function(e,r){null==e.states.find((function(e){return e===r}))&&e.states.push(r)},e.removeState=function(e,r){var t=e.states.indexOf(r);t<0||e.states.splice(t,1)},e.getState=function(e){return null==e.states||0===e.states.length?I.State.UNDEFINED:I.StatePriorities.getHighestPriority(e.states)},e}();r.ProductMap=a},486:(e,r)=>{var t;Object.defineProperty(r,\"__esModule\",{value:!0}),r.StatePriorities=r.State=void 0,function(e){e[e.UNDEFINED=255]=\"UNDEFINED\",e[e.HIDDEN=254]=\"HIDDEN\",e[e.HIGHLIGHTED=253]=\"HIGHLIGHTED\",e[e.XRAYVISIBLE=252]=\"XRAYVISIBLE\",e[e.PICKING_ONLY=251]=\"PICKING_ONLY\",e[e.HOVEROVER=250]=\"HOVEROVER\",e[e.UNSTYLED=225]=\"UNSTYLED\"}(t=r.State||(r.State={}));var I=function(){function e(){}return e.getPriority=function(e){switch(e){case t.HIGHLIGHTED:return 1;case t.PICKING_ONLY:return 2;case t.HIDDEN:return 3;case t.XRAYVISIBLE:return 4;default:return 100}},e.getHighestPriority=function(e){var r=this;if(null==e||0===e.length)return null;if(1===e.length)return e[0];var I=e.map((function(e){return{state:e,priority:r.getPriority(e)}}));I.sort((function(e,r){return e.priority-r.priority}));var a=I[0];return a.priority>50?t.UNDEFINED:a.state},e}();r.StatePriorities=I},66:(e,r)=>{var t;Object.defineProperty(r,\"__esModule\",{value:!0}),r.ProductType=void 0,(t=r.ProductType||(r.ProductType={}))[t.IFCPRODUCT=20]=\"IFCPRODUCT\",t[t.IFCELEMENT=19]=\"IFCELEMENT\",t[t.IFCBUILDINGELEMENT=26]=\"IFCBUILDINGELEMENT\",t[t.IFCFOOTING=120]=\"IFCFOOTING\",t[t.IFCPILE=572]=\"IFCPILE\",t[t.IFCBEAM=171]=\"IFCBEAM\",t[t.IFCBEAMSTANDARDCASE=1104]=\"IFCBEAMSTANDARDCASE\",t[t.IFCBUILDINGELEMENTPROXY=560]=\"IFCBUILDINGELEMENTPROXY\",t[t.IFCCHIMNEY=1120]=\"IFCCHIMNEY\",t[t.IFCCOLUMN=383]=\"IFCCOLUMN\",t[t.IFCCOLUMNSTANDARDCASE=1126]=\"IFCCOLUMNSTANDARDCASE\",t[t.IFCCOVERING=382]=\"IFCCOVERING\",t[t.IFCCURTAINWALL=456]=\"IFCCURTAINWALL\",t[t.IFCDOOR=213]=\"IFCDOOR\",t[t.IFCDOORSTANDARDCASE=1151]=\"IFCDOORSTANDARDCASE\",t[t.IFCMEMBER=310]=\"IFCMEMBER\",t[t.IFCMEMBERSTANDARDCASE=1214]=\"IFCMEMBERSTANDARDCASE\",t[t.IFCPLATE=351]=\"IFCPLATE\",t[t.IFCPLATESTANDARDCASE=1224]=\"IFCPLATESTANDARDCASE\",t[t.IFCRAILING=350]=\"IFCRAILING\",t[t.IFCRAMP=414]=\"IFCRAMP\",t[t.IFCRAMPFLIGHT=348]=\"IFCRAMPFLIGHT\",t[t.IFCROOF=347]=\"IFCROOF\",t[t.IFCSHADINGDEVICE=1265]=\"IFCSHADINGDEVICE\",t[t.IFCSLAB=99]=\"IFCSLAB\",t[t.IFCSLABELEMENTEDCASE=1268]=\"IFCSLABELEMENTEDCASE\",t[t.IFCSLABSTANDARDCASE=1269]=\"IFCSLABSTANDARDCASE\",t[t.IFCSTAIR=346]=\"IFCSTAIR\",t[t.IFCSTAIRFLIGHT=25]=\"IFCSTAIRFLIGHT\",t[t.IFCWALL=452]=\"IFCWALL\",t[t.IFCWALLELEMENTEDCASE=1314]=\"IFCWALLELEMENTEDCASE\",t[t.IFCWALLSTANDARDCASE=453]=\"IFCWALLSTANDARDCASE\",t[t.IFCWINDOW=667]=\"IFCWINDOW\",t[t.IFCWINDOWSTANDARDCASE=1316]=\"IFCWINDOWSTANDARDCASE\",t[t.IFCELEMENTCOMPONENT=424]=\"IFCELEMENTCOMPONENT\",t[t.IFCREINFORCINGELEMENT=262]=\"IFCREINFORCINGELEMENT\",t[t.IFCREINFORCINGBAR=571]=\"IFCREINFORCINGBAR\",t[t.IFCREINFORCINGMESH=531]=\"IFCREINFORCINGMESH\",t[t.IFCTENDON=261]=\"IFCTENDON\",t[t.IFCTENDONANCHOR=675]=\"IFCTENDONANCHOR\",t[t.IFCBUILDINGELEMENTPART=220]=\"IFCBUILDINGELEMENTPART\",t[t.IFCDISCRETEACCESSORY=423]=\"IFCDISCRETEACCESSORY\",t[t.IFCFASTENER=535]=\"IFCFASTENER\",t[t.IFCMECHANICALFASTENER=536]=\"IFCMECHANICALFASTENER\",t[t.IFCVIBRATIONISOLATOR=1312]=\"IFCVIBRATIONISOLATOR\",t[t.IFCFEATUREELEMENT=386]=\"IFCFEATUREELEMENT\",t[t.IFCSURFACEFEATURE=1287]=\"IFCSURFACEFEATURE\",t[t.IFCFEATUREELEMENTSUBTRACTION=499]=\"IFCFEATUREELEMENTSUBTRACTION\",t[t.IFCVOIDINGFEATURE=1313]=\"IFCVOIDINGFEATURE\",t[t.IFCOPENINGELEMENT=498]=\"IFCOPENINGELEMENT\",t[t.IFCOPENINGSTANDARDCASE=1217]=\"IFCOPENINGSTANDARDCASE\",t[t.IFCFEATUREELEMENTADDITION=385]=\"IFCFEATUREELEMENTADDITION\",t[t.IFCPROJECTIONELEMENT=384]=\"IFCPROJECTIONELEMENT\",t[t.IFCFURNISHINGELEMENT=253]=\"IFCFURNISHINGELEMENT\",t[t.IFCFURNITURE=1184]=\"IFCFURNITURE\",t[t.IFCSYSTEMFURNITUREELEMENT=1291]=\"IFCSYSTEMFURNITUREELEMENT\",t[t.IFCDISTRIBUTIONELEMENT=44]=\"IFCDISTRIBUTIONELEMENT\",t[t.IFCDISTRIBUTIONFLOWELEMENT=45]=\"IFCDISTRIBUTIONFLOWELEMENT\",t[t.IFCDISTRIBUTIONCHAMBERELEMENT=180]=\"IFCDISTRIBUTIONCHAMBERELEMENT\",t[t.IFCENERGYCONVERSIONDEVICE=175]=\"IFCENERGYCONVERSIONDEVICE\",t[t.IFCAIRTOAIRHEATRECOVERY=1097]=\"IFCAIRTOAIRHEATRECOVERY\",t[t.IFCBOILER=1105]=\"IFCBOILER\",t[t.IFCBURNER=1109]=\"IFCBURNER\",t[t.IFCCHILLER=1119]=\"IFCCHILLER\",t[t.IFCCOIL=1124]=\"IFCCOIL\",t[t.IFCCONDENSER=1132]=\"IFCCONDENSER\",t[t.IFCCOOLEDBEAM=1141]=\"IFCCOOLEDBEAM\",t[t.IFCCOOLINGTOWER=1142]=\"IFCCOOLINGTOWER\",t[t.IFCENGINE=1164]=\"IFCENGINE\",t[t.IFCEVAPORATIVECOOLER=1166]=\"IFCEVAPORATIVECOOLER\",t[t.IFCEVAPORATOR=1167]=\"IFCEVAPORATOR\",t[t.IFCHEATEXCHANGER=1187]=\"IFCHEATEXCHANGER\",t[t.IFCHUMIDIFIER=1188]=\"IFCHUMIDIFIER\",t[t.IFCTUBEBUNDLE=1305]=\"IFCTUBEBUNDLE\",t[t.IFCUNITARYEQUIPMENT=1310]=\"IFCUNITARYEQUIPMENT\",t[t.IFCELECTRICGENERATOR=1160]=\"IFCELECTRICGENERATOR\",t[t.IFCELECTRICMOTOR=1161]=\"IFCELECTRICMOTOR\",t[t.IFCMOTORCONNECTION=1216]=\"IFCMOTORCONNECTION\",t[t.IFCSOLARDEVICE=1270]=\"IFCSOLARDEVICE\",t[t.IFCTRANSFORMER=1303]=\"IFCTRANSFORMER\",t[t.IFCFLOWCONTROLLER=121]=\"IFCFLOWCONTROLLER\",t[t.IFCAIRTERMINALBOX=1096]=\"IFCAIRTERMINALBOX\",t[t.IFCDAMPER=1148]=\"IFCDAMPER\",t[t.IFCFLOWMETER=1182]=\"IFCFLOWMETER\",t[t.IFCVALVE=1311]=\"IFCVALVE\",t[t.IFCELECTRICDISTRIBUTIONBOARD=1157]=\"IFCELECTRICDISTRIBUTIONBOARD\",t[t.IFCELECTRICTIMECONTROL=1162]=\"IFCELECTRICTIMECONTROL\",t[t.IFCPROTECTIVEDEVICE=1235]=\"IFCPROTECTIVEDEVICE\",t[t.IFCSWITCHINGDEVICE=1290]=\"IFCSWITCHINGDEVICE\",t[t.IFCFLOWFITTING=467]=\"IFCFLOWFITTING\",t[t.IFCDUCTFITTING=1153]=\"IFCDUCTFITTING\",t[t.IFCPIPEFITTING=1222]=\"IFCPIPEFITTING\",t[t.IFCCABLECARRIERFITTING=1111]=\"IFCCABLECARRIERFITTING\",t[t.IFCCABLEFITTING=1113]=\"IFCCABLEFITTING\",t[t.IFCJUNCTIONBOX=1195]=\"IFCJUNCTIONBOX\",t[t.IFCFLOWMOVINGDEVICE=502]=\"IFCFLOWMOVINGDEVICE\",t[t.IFCCOMPRESSOR=1131]=\"IFCCOMPRESSOR\",t[t.IFCFAN=1177]=\"IFCFAN\",t[t.IFCPUMP=1238]=\"IFCPUMP\",t[t.IFCFLOWSEGMENT=574]=\"IFCFLOWSEGMENT\",t[t.IFCDUCTSEGMENT=1154]=\"IFCDUCTSEGMENT\",t[t.IFCPIPESEGMENT=1223]=\"IFCPIPESEGMENT\",t[t.IFCCABLECARRIERSEGMENT=1112]=\"IFCCABLECARRIERSEGMENT\",t[t.IFCCABLESEGMENT=1115]=\"IFCCABLESEGMENT\",t[t.IFCFLOWSTORAGEDEVICE=371]=\"IFCFLOWSTORAGEDEVICE\",t[t.IFCTANK=1293]=\"IFCTANK\",t[t.IFCELECTRICFLOWSTORAGEDEVICE=1159]=\"IFCELECTRICFLOWSTORAGEDEVICE\",t[t.IFCFLOWTERMINAL=46]=\"IFCFLOWTERMINAL\",t[t.IFCFIRESUPPRESSIONTERMINAL=1179]=\"IFCFIRESUPPRESSIONTERMINAL\",t[t.IFCSANITARYTERMINAL=1262]=\"IFCSANITARYTERMINAL\",t[t.IFCSTACKTERMINAL=1277]=\"IFCSTACKTERMINAL\",t[t.IFCWASTETERMINAL=1315]=\"IFCWASTETERMINAL\",t[t.IFCAIRTERMINAL=1095]=\"IFCAIRTERMINAL\",t[t.IFCMEDICALDEVICE=1212]=\"IFCMEDICALDEVICE\",t[t.IFCSPACEHEATER=1272]=\"IFCSPACEHEATER\",t[t.IFCAUDIOVISUALAPPLIANCE=1099]=\"IFCAUDIOVISUALAPPLIANCE\",t[t.IFCCOMMUNICATIONSAPPLIANCE=1127]=\"IFCCOMMUNICATIONSAPPLIANCE\",t[t.IFCELECTRICAPPLIANCE=1156]=\"IFCELECTRICAPPLIANCE\",t[t.IFCLAMP=1198]=\"IFCLAMP\",t[t.IFCLIGHTFIXTURE=1199]=\"IFCLIGHTFIXTURE\",t[t.IFCOUTLET=1219]=\"IFCOUTLET\",t[t.IFCFLOWTREATMENTDEVICE=425]=\"IFCFLOWTREATMENTDEVICE\",t[t.IFCINTERCEPTOR=1193]=\"IFCINTERCEPTOR\",t[t.IFCDUCTSILENCER=1155]=\"IFCDUCTSILENCER\",t[t.IFCFILTER=1178]=\"IFCFILTER\",t[t.IFCDISTRIBUTIONCONTROLELEMENT=468]=\"IFCDISTRIBUTIONCONTROLELEMENT\",t[t.IFCPROTECTIVEDEVICETRIPPINGUNIT=1236]=\"IFCPROTECTIVEDEVICETRIPPINGUNIT\",t[t.IFCACTUATOR=1091]=\"IFCACTUATOR\",t[t.IFCALARM=1098]=\"IFCALARM\",t[t.IFCCONTROLLER=1139]=\"IFCCONTROLLER\",t[t.IFCFLOWINSTRUMENT=1181]=\"IFCFLOWINSTRUMENT\",t[t.IFCSENSOR=1264]=\"IFCSENSOR\",t[t.IFCUNITARYCONTROLELEMENT=1308]=\"IFCUNITARYCONTROLELEMENT\",t[t.IFCCIVILELEMENT=1122]=\"IFCCIVILELEMENT\",t[t.IFCELEMENTASSEMBLY=18]=\"IFCELEMENTASSEMBLY\",t[t.IFCGEOGRAPHICELEMENT=1185]=\"IFCGEOGRAPHICELEMENT\",t[t.IFCTRANSPORTELEMENT=416]=\"IFCTRANSPORTELEMENT\",t[t.IFCVIRTUALELEMENT=168]=\"IFCVIRTUALELEMENT\",t[t.IFCSTRUCTURALACTIVITY=41]=\"IFCSTRUCTURALACTIVITY\",t[t.IFCSTRUCTURALACTION=40]=\"IFCSTRUCTURALACTION\",t[t.IFCSTRUCTURALCURVEACTION=1279]=\"IFCSTRUCTURALCURVEACTION\",t[t.IFCSTRUCTURALLINEARACTION=463]=\"IFCSTRUCTURALLINEARACTION\",t[t.IFCSTRUCTURALSURFACEACTION=1284]=\"IFCSTRUCTURALSURFACEACTION\",t[t.IFCSTRUCTURALPLANARACTION=39]=\"IFCSTRUCTURALPLANARACTION\",t[t.IFCSTRUCTURALPOINTACTION=356]=\"IFCSTRUCTURALPOINTACTION\",t[t.IFCSTRUCTURALREACTION=355]=\"IFCSTRUCTURALREACTION\",t[t.IFCSTRUCTURALCURVEREACTION=1280]=\"IFCSTRUCTURALCURVEREACTION\",t[t.IFCSTRUCTURALPOINTREACTION=354]=\"IFCSTRUCTURALPOINTREACTION\",t[t.IFCSTRUCTURALSURFACEREACTION=1285]=\"IFCSTRUCTURALSURFACEREACTION\",t[t.IFCSTRUCTURALITEM=226]=\"IFCSTRUCTURALITEM\",t[t.IFCSTRUCTURALCONNECTION=265]=\"IFCSTRUCTURALCONNECTION\",t[t.IFCSTRUCTURALCURVECONNECTION=534]=\"IFCSTRUCTURALCURVECONNECTION\",t[t.IFCSTRUCTURALPOINTCONNECTION=533]=\"IFCSTRUCTURALPOINTCONNECTION\",t[t.IFCSTRUCTURALSURFACECONNECTION=264]=\"IFCSTRUCTURALSURFACECONNECTION\",t[t.IFCSTRUCTURALMEMBER=225]=\"IFCSTRUCTURALMEMBER\",t[t.IFCSTRUCTURALCURVEMEMBER=224]=\"IFCSTRUCTURALCURVEMEMBER\",t[t.IFCSTRUCTURALCURVEMEMBERVARYING=227]=\"IFCSTRUCTURALCURVEMEMBERVARYING\",t[t.IFCSTRUCTURALSURFACEMEMBER=420]=\"IFCSTRUCTURALSURFACEMEMBER\",t[t.IFCSTRUCTURALSURFACEMEMBERVARYING=421]=\"IFCSTRUCTURALSURFACEMEMBERVARYING\",t[t.IFCPORT=179]=\"IFCPORT\",t[t.IFCDISTRIBUTIONPORT=178]=\"IFCDISTRIBUTIONPORT\",t[t.IFCANNOTATION=634]=\"IFCANNOTATION\",t[t.IFCSPATIALELEMENT=1273]=\"IFCSPATIALELEMENT\",t[t.IFCSPATIALSTRUCTUREELEMENT=170]=\"IFCSPATIALSTRUCTUREELEMENT\",t[t.IFCBUILDING=169]=\"IFCBUILDING\",t[t.IFCBUILDINGSTOREY=459]=\"IFCBUILDINGSTOREY\",t[t.IFCSITE=349]=\"IFCSITE\",t[t.IFCSPACE=454]=\"IFCSPACE\",t[t.IFCEXTERNALSPATIALSTRUCTUREELEMENT=1175]=\"IFCEXTERNALSPATIALSTRUCTUREELEMENT\",t[t.IFCEXTERNALSPATIALELEMENT=1174]=\"IFCEXTERNALSPATIALELEMENT\",t[t.IFCSPATIALZONE=1275]=\"IFCSPATIALZONE\",t[t.IFCGRID=564]=\"IFCGRID\",t[t.IFCPROXY=447]=\"IFCPROXY\"},241:(e,r,t)=>{Object.defineProperty(r,\"__esModule\",{value:!0}),r.BinaryReader=void 0;var I=t(747),a=function(){function e(){this._buffer=null,this._view=null,this._position=0,this._progress=function(e){},this._lastProgress=0}return Object.defineProperty(e.prototype,\"Position\",{get:function(){return this._position},enumerable:!1,configurable:!0}),e.prototype.getSubReader=function(r){var t=new e,I=this._buffer.slice(this._position,this._position+r);return t.load(I,null,null),this._position+=r,t},e.prototype.load=function(e,r,t){this._position=0;var a=this;if(t=t||function(e){},this._progress=t,void 0===e||null==e)throw\"Source must be defined\";if(\"string\"==typeof e){var n=new XMLHttpRequest;n.open(\"GET\",e,!0),n.onreadystatechange=function(){if(4==n.readyState&&200==n.status){var e=new FileReader;e.onloadend=function(){e.result&&\"string\"!=typeof e.result&&(a._buffer=e.result,a._view=new DataView(a._buffer),a.onloaded&&a.onloaded(a))},e.onprogress=function(e){t({message:\"Downloading geometry\",percent:Math.floor(e.loaded/e.total*100),type:I.MessageType.PROGRESS,phase:I.LoadingPhase.DOWNLOADING})},e.readAsArrayBuffer(n.response)}if(4==n.readyState&&200!=n.status){var r=\"Failed to fetch binary data from server. Server code: \"+n.status+\". This might be due to CORS policy of your browser if you run this as a local file.\";throw t({message:\"Downloading geometry\",percent:0,type:I.MessageType.FAILED,phase:I.LoadingPhase.DOWNLOADING}),a.onerror&&a.onerror(r),r}},n.responseType=\"blob\",null!=r&&Object.keys(r).forEach((function(e){var t=r[e];n.setRequestHeader(e,t)})),n.send()}else if(e instanceof Blob||\"undefined\"!=typeof File&&e instanceof File){var E=new FileReader;E.onloadend=function(){E.result&&\"string\"!=typeof E.result&&(a._buffer=E.result,a._view=new DataView(a._buffer),a.onloaded&&a.onloaded(a))},E.onprogress=function(e){t({message:\"Loading binary data\",percent:Math.floor(e.loaded/e.total*100),type:I.MessageType.PROGRESS,phase:I.LoadingPhase.DOWNLOADING})},E.readAsArrayBuffer(e)}else e instanceof ArrayBuffer&&(this._buffer=e,this._view=new DataView(a._buffer),a.onloaded&&a.onloaded(a))},e.prototype.seek=function(e){if(e<0||e>this._buffer.byteLength)throw\"Position out of range.\";this._position=e},e.prototype.isEOF=function(){if(null==this._position)throw\"Position is not defined\";return this._position==this._buffer.byteLength},e.prototype.readArray=function(e,r,t){null==r&&(r=1);var I=e*r,a=this._position;return this._position+=I,this.reportProgress(),1===r?new t(this._buffer.slice(a,a+I))[0]:new t(this._buffer.slice(a,a+I))},e.prototype.move=function(e){var r=this._position;return this._position+=e,this.reportProgress(),r},e.prototype.reportProgress=function(){null!=this._progress&&this._position-this._lastProgress>5e5&&(this._lastProgress=this._position,this._progress({type:I.MessageType.PROGRESS,message:\"Reading data\",percent:Math.floor(100*this._position/this._buffer.byteLength),phase:I.LoadingPhase.READING}))},e.prototype.readByte=function(){return this.readUint8()},e.prototype.readByteArray=function(e){return this.readUint8Array(e)},e.prototype.readUint8=function(){var e=this.move(1);return this._view.getUint8(e)},e.prototype.readUint8Array=function(e){return this.readArray(1,e,Uint8Array)},e.prototype.readInt16=function(){var e=this.move(2);return this._view.getInt16(e,!0)},e.prototype.readInt16Array=function(e){return this.readArray(2,e,Int16Array)},e.prototype.readUInt16=function(){var e=this.move(2);return this._view.getUint16(e,!0)},e.prototype.readUint16Array=function(e){return this.readArray(2,e,Uint16Array)},e.prototype.readInt32=function(){var e=this.move(4);return this._view.getInt32(e,!0)},e.prototype.readInt32Array=function(e){return this.readArray(4,e,Int32Array)},e.prototype.readUint32=function(){var e=this.move(4);return this._view.getUint32(e,!0)},e.prototype.readUint32Array=function(e){return this.readArray(4,e,Uint32Array)},e.prototype.readFloat32=function(){var e=this.move(4);return this._view.getFloat32(e,!0)},e.prototype.readFloat32Array=function(e){return this.readArray(4,e,Float32Array)},e.prototype.readFloat64=function(){var e=this.move(8);return this._view.getFloat64(e,!0)},e.prototype.readFloat64Array=function(e){return this.readArray(8,e,Float64Array)},e.prototype.readChar=function(e){null==e&&(e=1);var r=this.readByteArray(e),t=new Array(e);for(var I in r)t[I]=String.fromCharCode(r[I]);return 1===e?t[0]:t},e.prototype.readPoint=function(e){null==e&&(e=1);for(var r=this.readFloat32Array(3*e),t=new Array(e),I=0;I<e;I++){var a=3*I*4,n=new Float32Array(r.buffer,a,3);t[I]=n}return 1===e?t[0]:t},e.prototype.readRgba=function(e){null==e&&(e=1);for(var r=this.readByteArray(4*e),t=new Array(e),I=0;I<e;I++){var a=4*I,n=new Uint8Array(r.buffer,a,4);t[I]=n}return 1===e?t[0]:t},e.prototype.readPackedNormal=function(e){null==e&&(e=1);for(var r=this.readUint8Array(2*e),t=new Array(e),I=0;I<e;I++){var a=new Uint8Array(r.buffer,2*I,2);t[I]=a}return 1===e?t[0]:t},e.prototype.readMatrix4x4=function(e){null==e&&(e=1);for(var r=this.readFloat32Array(16*e),t=new Array(e),I=0;I<e;I++){var a=16*I*4,n=new Float32Array(r.buffer,a,16);t[I]=n}return 1===e?t[0]:t},e.prototype.readMatrix4x4_64=function(e){null==e&&(e=1);for(var r=this.readFloat64Array(16*e),t=new Array(e),I=0;I<e;I++){var a=16*I*8,n=new Float64Array(r.buffer,a,16);t[I]=n}return 1===e?t[0]:t},e.prototype.readData=function(e){var r=this.move(e);return this._buffer.slice(r,r+e)},e}();r.BinaryReader=a},360:(e,r,t)=>{Object.defineProperty(r,\"__esModule\",{value:!0}),r.Region=r.ModelGeometry=void 0;var I=t(241),a=t(623),n=t(486),E=t(66),o=t(747),C=t(18),i=function(){function e(){this.normals=new Uint8Array(0),this.indices=new Float32Array(0),this.products=new Float32Array(0),this.transformations=new Float32Array(0),this.styleIndices=new Uint16Array(0),this.states=new Uint8Array(0),this.vertices=new Float32Array(0),this.matrices=new Float32Array(0),this.styles=new Uint8Array(0),this.meter=1e3,this.wcs=[0,0,0],this._iVertex=0,this._iIndexForward=0,this._iIndexBackward=0,this._iTransform=0,this._iMatrix=0,this._maxVersionSupported=4,this.productMaps={},this.productIdLookup=[],this.breaks={10:[],20:[],40:[],30:[],50:[],60:[],70:[],80:[],90:[],100:[]},this._styleMap=new T}return e.prototype.parse=function(e,r){var t=this;if(e&&!e.isEOF()){this._reader=e;var I=e;if(94132117!==I.readInt32())throw new Error(\"Magic number mismatch. This is not a wexBIM file.\");var i=I.readByte();if(i>this._maxVersionSupported)throw new Error(\"Viewer doesn't support version \"+i+\" of the wexBIM stream\");var T=I.readInt32(),F=I.readInt32(),A=I.readInt32(),R=I.readInt32(),N=I.readInt32(),d=I.readInt32();this.meter=I.readFloat32(),i>3&&(this.wcs=[I.readFloat64(),I.readFloat64(),I.readFloat64()]);var L=I.readInt16();this.vertices=new Float32Array(this.square(4,3*F)),this.normals=new Uint8Array(6*A),this.indices=new Float32Array(3*A),this.styleIndices=new Uint16Array(3*A),this.styles=new Uint8Array(this.square(1,4*(d+2))),this.products=new Float32Array(3*A),this.states=new Uint8Array(3*A*2),this.transformations=new Float32Array(3*A),this.matrices=new Float32Array(this.square(4,16*R)),this.productMaps={},this.regions=new Array(L),this._iVertex=0,this._iIndexForward=0,this._iIndexBackward=3*A,this._iTransform=0,this._iMatrix=0;for(var u=0;u<L;u++)(P=new s).population=I.readInt32(),P.centre=I.readFloat32Array(3),P.bbox=I.readFloat32Array(6),this.regions[u]=P;for(var O=0;O<d;O++){var p=I.readInt32(),l=255*I.readFloat32(),h=255*I.readFloat32(),S=255*I.readFloat32(),y=255*I.readFloat32();this.styles.set([l,h,S,y],4*O),this._styleMap.Add({id:p,index:O,transparent:y<254})}for(this.styles.set([255,255,255,255],4*O),this._styleMap.Add({id:-1,index:O,transparent:!1}),O++,this.styles.set([0,255,255,100],4*O),this._styleMap.Add({id:-2,index:O,transparent:!0}),u=0;u<N;u++){var M=I.readInt32(),f=I.readInt16(),U=I.readFloat32Array(6),c=new C.ProductMap;c.productID=M,c.renderId=u+1,c.type=f,c.bBox=U,c.spans=[],this.productMaps[M]=c,this.productIdLookup[u+1]=M,f!==E.ProductType.IFCSPACE&&f!==E.ProductType.IFCOPENINGELEMENT||c.states.push(n.State.HIDDEN)}if(i>=3)for(var D=0;D<L;D++){for(var P=this.regions[D],v=I.readInt32(),b=new Array(v),G=0;G<v;G++){var g=this.readShape(i),w=I.readInt32();if(0!==w){var B=I.getSubReader(w);if((V=new a.TriangulatedShape).parse(B),!B.isEOF())throw new Error(\"Incomplete reading of geometry for shape instance \"+g[0].iLabel);b[G]={shapes:g,geometry:V}}}for(r.orderGeometryBySize&&b.sort((function(e,r){var I=t.productMaps[e.shapes[0].pLabel],a=t.productMaps[r.shapes[0].pLabel];if(null==I)return 1;if(null==a)return-1;var n=I.bBox[3]*I.bBox[4]*I.bBox[5];return a.bBox[3]*I.bBox[4]*I.bBox[5]-n})),G=0;G<v;G++){var _=b[G];this.feedDataArrays(_.shapes,_.geometry)}}else for(var x=0;x<T;x++){var V;g=this.readShape(i),(V=new a.TriangulatedShape).parse(I),this.feedDataArrays(g,V)}if(!I.isEOF())throw this.progress({type:o.MessageType.FAILED,message:\"Processed data\",percent:0,phase:o.LoadingPhase.READING}),new Error(\"Binary reader is not at the end of the file.\");this.progress({type:o.MessageType.PROGRESS,message:\"Processed data\",percent:100,phase:o.LoadingPhase.READING}),this.transparentIndex=this._iIndexForward,this.breaks[100]=[this.transparentIndex-1,this.transparentIndex]}},e.prototype.square=function(e,r){if(null==e||null==r)throw new Error('Wrong arguments for \"square\" function.');if(0===r)return 0;for(var t=r*e,I=Math.ceil(Math.sqrt(t/4));4*I%e!=0;)I++;return I*I*4/e},e.prototype.feedDataArrays=function(e,r){var t=this;e.forEach((function(e){var I=0,a=I=e.transparent?t._iIndexBackward-r.indices.length:t._iIndexForward,o=t.productMaps[e.pLabel];void 0===o&&((o=new C.ProductMap).productID=0,o.renderId=0,o.type=E.ProductType.IFCOPENINGELEMENT,o.bBox=new Float32Array(6),o.spans=[],o.states.push(n.State.HIDDEN),t.productMaps[e.pLabel]=o),t.normals.set(r.normals,2*I);var i=o.type===E.ProductType.IFCSPACE||o.type===E.ProductType.IFCOPENINGELEMENT?n.State.HIDDEN:255;r.indices.forEach((function(r){t.indices[I]=r+t._iVertex/3,t.products[I]=o.renderId,t.styleIndices[I]=e.style,t.transformations[I]=e.transform,t.states[2*I]=i,t.states[2*I+1]=255,I++}));var s=I;o.spans.push(new Int32Array([a,s])),e.transparent?t._iIndexBackward-=r.indices.length:t._iIndexForward+=r.indices.length;var T=(t._iIndexForward+t.indices.length-t._iIndexBackward)/t.indices.length*100;Object.getOwnPropertyNames(t.breaks).forEach((function(e){var r=+e;0===t.breaks[r].length&&T>r&&(t.breaks[r]=[t._iIndexForward,t._iIndexBackward])}))}),this),this.vertices.set(r.vertices,this._iVertex),this._iVertex+=r.vertices.length},e.prototype.readShape=function(e){for(var r=this._reader,t=r.readInt32(),I=new Array,a=0;a<t;a++){var n=r.readInt32(),o=(r.readInt16(),r.readInt32()),C=r.readInt32(),i=null;t>1&&(i=1===e?r.readFloat32Array(16):r.readFloat64Array(16),this.matrices.set(i,this._iMatrix),this._iMatrix+=16);var s=this._styleMap.GetStyle(C);null===s&&(s=this._styleMap.GetStyle(-1));var T=this.productMaps[n].type;T!==E.ProductType.IFCSPACE&&T!==E.ProductType.IFCOPENINGELEMENT||(s=this._styleMap.GetStyle(-2)),I.push({pLabel:n,iLabel:o,style:s.index,transparent:s.transparent,transform:null!=i?this._iTransform++:-1})}return I},e.prototype.load=function(e,r,t,a){var n=this;void 0===a&&(a={}),this.progress=t||function(e){};var E=new I.BinaryReader,o=this;E.onloaded=function(){o.parse(E,a),o.onloaded&&o.onloaded(n)},E.onerror=function(e){o.onerror&&o.onerror(e)},E.load(e,r,t)},e}();r.ModelGeometry=i;var s=function(){function e(e){this.population=-1,this.centre=null,this.bbox=null,e&&(this.population=e.population,e.centre&&(this.centre=new Float32Array(e.centre)),e.bbox&&(this.bbox=new Float32Array(e.bbox)))}return e.clone=function(r){var t=new e;return t.population=r.population,r.centre&&(t.centre=new Float32Array(r.centre)),r.bbox&&(t.bbox=new Float32Array(r.bbox)),t},e.prototype.merge=function(r){if(-1===this.population&&null===this.centre&&null===this.bbox)return new e(r);var t=new e;if(t.population=this.population+r.population,this.bbox&&r.bbox){var I=Math.min(this.bbox[0],r.bbox[0]),a=Math.min(this.bbox[1],r.bbox[1]),n=Math.min(this.bbox[2],r.bbox[2]),E=Math.max(this.bbox[0]+this.bbox[3],r.bbox[0]+r.bbox[3]),o=Math.max(this.bbox[1]+this.bbox[4],r.bbox[1]+r.bbox[4]),C=Math.max(this.bbox[2]+this.bbox[5],r.bbox[2]+r.bbox[5]),i=E-I,s=o-a,T=C-n,F=(I+E)/2,A=(a+o)/2,R=(n+C)/2;t.bbox=new Float32Array([I,a,n,i,s,T]),t.centre=new Float32Array([F,A,R])}else this.bbox?(t.bbox=new Float32Array(this.bbox),t.centre=new Float32Array(this.centre)):(t.bbox=new Float32Array(r.bbox),t.centre=new Float32Array(r.centre));return t},e}();r.Region=s;var T=function(){function e(){this._internal={}}return e.prototype.Add=function(e){this._internal[e.id]=e},e.prototype.GetStyle=function(e){return this._internal[e]||null},e}()},623:(e,r,t)=>{Object.defineProperty(r,\"__esModule\",{value:!0}),r.TriangulatedShape=void 0;var I=t(241),a=function(){function e(){var e=this;this.load=function(r){var t=new I.BinaryReader,a=e;t.onloaded=function(){a.parse(t),a.onloaded&&a.onloaded(e)},t.load(r,null,null)}}return e.prototype.parse=function(e){var r=this,t=(e.readByte(),e.readInt32()),I=e.readInt32();r.vertices=e.readFloat32Array(3*t),r.indices=new Uint32Array(3*I),r.normals=new Uint8Array(6*I);var a,n=0;a=t<=255?function(r){return e.readByteArray(r)}:t<=65535?function(r){return e.readUint16Array(r)}:function(r){return e.readInt32Array(r)};var E=e.readInt32();if(0!==t&&0!==I)for(var o=0;o<E;o++){var C=e.readInt32();if(0!=C){var i=C>0;if(C=Math.abs(C),i){var s=e.readByteArray(2),T=a(3*C);r.indices.set(T,n);for(var F=0;F<3*C;F++)r.normals[2*n]=s[0],r.normals[2*n+1]=s[1],n++}else for(F=0;F<C;F++)r.indices[n]=a(),r.normals.set(e.readByteArray(2),2*n),n++,r.indices[n]=a(),r.normals.set(e.readByteArray(2),2*n),n++,r.indices[n]=a(),r.normals.set(e.readByteArray(2),2*n),n++}}},e}();r.TriangulatedShape=a},107:(e,r,t)=>{Object.defineProperty(r,\"__esModule\",{value:!0});var I=t(747),a=t(360);if(self&&self instanceof DedicatedWorkerGlobalScope){var n=self;n.onmessage=function(e){var r=e.data.model,t=e.data.headers,E=e.data.options,o=new a.ModelGeometry;o.onerror=function(e){var r={type:I.MessageType.FAILED,message:e,percent:0,phase:I.LoadingPhase.DOWNLOADING};n.postMessage(r),console.error(e),n.close()},o.onloaded=function(){try{var e={},r=[];for(var t in o)if(o.hasOwnProperty(t)){var a=o[t];\"function\"==typeof a||t.startsWith(\"_\")||(e[t]=a,ArrayBuffer.isView(a)?r.push(a.buffer):null!=(C=a).width&&null!=C.height&&null!=C.close&&r.push(a))}var E={type:I.MessageType.COMPLETED,message:\"Read Completed\",percent:100,result:e,phase:I.LoadingPhase.READING};n.postMessage(E,r),n.close()}catch(e){E={type:I.MessageType.FAILED,message:e,percent:0,phase:I.LoadingPhase.READING},n.postMessage(E),console.error(e),n.close()}var C},o.load(r,t,(function(e){n.postMessage(e)}),E)}}}},r={};return function t(I){if(r[I])return r[I].exports;var a=r[I]={exports:{}};return e[I](a,a.exports,t),a.exports}(107)})());"