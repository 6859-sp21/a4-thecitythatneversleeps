(this["webpackJsonpa4-app"]=this["webpackJsonpa4-app"]||[]).push([[0],{100:function(e){e.exports=JSON.parse('{"filterOptions":{"Location Type":["Park/Playground","","Residential Building/House","Store/Commercial","Street/Sidewalk","Club/Bar/Restaurant","House of Worship"],"borough":["Bronx","Brooklyn","Manhattan","Queens","Staten Island","borough"],"neighborhood":["Hunts Point and Mott Haven","Central Bronx","East New York and New Lots","Inwood and Washington Heights","High Bridge and Morrisania","Bushwick and Williamsburg","Central Brooklyn","Northeast Bronx","Flatbush","Central Queens","Greenpoint","Upper East Side","Canarsie and Flatlands","Northwest Brooklyn","Northwest Queens","Chelsea and Clinton","Southwest Queens","Southern Brooklyn","Rockaways","Southwest Brooklyn","West Central Queens","Greenwich Village and Soho","Jamaica","Northeast Queens","Stapleton and St. George","Central Harlem","Lower East Side","Southeast Bronx","Lower Manhattan","Upper West Side","Bronx Park and Fordham","West Queens","East Harlem","Sunset Park","neighborhood","Gramercy Park and Murray Hill","Borough Park","Kingsbridge and Riverdale","Long Island City","South Shore","Southeast Queens","North Queens","Mid-Island","Port Richmond","West Side","Tribeca"],"Incident Zip":["10454","10457","11207","10032","10451","10453","11221","11216","11206","10466","11210","11365","10459","11222","10028","11234","11208","11205","11101","10001","11419","11223","11691","11214","11233","11211","11385","10012","11433","11102","10036","11361","11104","11237","10304","11212","10037","10003","10456","11418","10461","10009","10452","10005","10025","10473","10467","11226","10013","11224","10034","11373","10026","11367","10029","10128","11209","11201","11220","10458","10027","11106","10465","10460","11105","11103","10455","11249","10016","11204","10463","10468","11375","10040","11378","11232","11219","11109","11434","10472","11421","11368","11215","10019","10312","10014","10002","11426","11358","10038","11360","10464","11377","11225","11357","11235","10010","10462","11370","10033","10039","11213","11372","11420","11692","11356","11379","10305","11001","10030","10314","10471","10011","10021","10301","10031","10024","10006","10022","11238","11354","11423","11228","11203","11432","11428","10035","10075","11231","10017","10310","11236","10469","11004","11415","11416","10120","10023","10475","11217","10470","11355","11218","11040","11412","11417","11411","11694","11369","11229","10018","10065","10303","11362","12345","11435","10308","11374","10004","10474","11427","10307","11230","10280","10007","10306","11693","10302","11422","11436","11414","11364","11366","11413","11239","10309","11429","10123","10069","10044","10020","11371","11697","10162","11363","10112","10282","10000","NA","10170","10177","10105","10045","10279","10178","10119","11359","11430","10165","10169","10103","10048","10121"]}}')},146:function(e,t){},198:function(e,t,a){},199:function(e,t,a){},220:function(e,t){},226:function(e,t,a){},228:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),i=a(37),r=a.n(i),s=(a(198),a(181)),c=a(76),l=a(77),u=a(83),d=a(82),h=(a(199),a(100)),p=a(176),b=a(277),f=a(280),j=a(17),g="pk.eyJ1IjoibWVsb2R5cGh1IiwiYSI6ImNrbjJlbms0eDE2eTkyb21vb3RpOTJtYmoifQ.KyZkOMUbvjs8btwGKqNyjg",O={longitude:-73.75,latitude:40.73,zoom:9,maxZoom:16,pitch:0,bearing:0},m=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={layers:[],mapData:{},iconData:[]},n}return Object(l.a)(a,[{key:"updateData",value:function(e){this.setState({mapData:e})}},{key:"_generateLayer",value:function(){var e=[];for(var t in this.state.mapData){var a=this.state.mapData[t].Location,n=a.slice(1,a.length-1).split(", ");n&&2==n.length&&e.push({coordinates:[parseFloat(n[0]),parseFloat(n[1])],weight:1})}return[new f.a({id:"heatmapLayer",data:e,getPosition:function(e){return e.coordinates},getWeight:function(e){return e.weight},aggregation:"SUM"})]}},{key:"componentWillReceiveProps",value:function(e){this.updateData(e.mapData)}},{key:"componentDidMount",value:function(){this.updateData(this.props.mapData)}},{key:"render",value:function(){return Object(j.jsx)("div",{children:Object(j.jsx)(b.a,{className:"BYE",initialViewState:O,controller:!0,layers:this._generateLayer(),viewState:this.props.viewState,children:Object(j.jsx)(p.a,{mapStyle:"https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json",mapboxApiAccessToken:g})})})}}]),a}(o.a.Component),v=a(66),S=a(113),x=a(283),y=a(177),k=a(25),C=a(272),w=a(134),D=a(278),M=a(149),N=(a(225),a(226),a(148)),B={color:"#ffdd99",height:"20px"},F={color:"white"},L={color:"black"},P=(C.a[500],{control:function(e,t){return Object(v.a)(Object(v.a)({},e),{},{background:"white",borderRadius:t.isFocused?"3px 3px 0 0":3,borderColor:t.isFocused?"#ffdd99":"white",boxShadow:(t.isFocused,null),"&:hover":{borderColor:t.isFocused?"red":"blue"}})},menu:function(e){return Object(v.a)(Object(v.a)({},e),{},{borderRadius:0,marginTop:0})},menuList:function(e){return Object(v.a)(Object(v.a)({},e),{},{padding:0})}}),I=(Object(y.a)({palette:{primary:C.a}}),Object(k.a)((function(e){return{root:{color:N.amber500,backgroundColor:w.a[900],"&:hover":{backgroundColor:N.amber500}}}}))(x.a));function J(e){var t=[];for(var a in e)t.push({value:a,label:a});return t}var R="Incident Zip",T="borough",H="neighborhood",Q="Location Type",W=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).MultiSelect=function(e,t,a){return Object(j.jsx)("div",{className:"tinyspace",children:Object(j.jsx)(D.a,{closeMenuOnSelect:!1,styles:P,onChange:function(e,t){n.setState({filters:{zipcode:R==a?e:n.state.filters.zipcode,borough:T==a?e:n.state.filters.borough,neighborhood:H==a?e:n.state.filters.neighborhood,location_type:Q==a?e:n.state.filters.location_type}})},defaultValue:e,isMulti:!0,options:t})})},n.menuIconClick=function(){n.setMenuCollapse(!n.state.menuCollapse)},n.onSubmit=function(){n.props.updateMapData(n.state.filters)},n.state={menuCollapse:!1,filterOptions:J(h.filterOptions),filters:J(h.filterOptions)},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){}},{key:"setMenuCollapse",value:function(e){this.setState({menuCollapse:e})}},{key:"getSidebarContent",value:function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{style:F,children:"Filters"}),this.MultiSelect(this.state.filters[R],this.state.filterOptions[R],R),this.MultiSelect(this.state.filters.neighborhood,this.state.filterOptions.neighborhood,H),this.MultiSelect(this.state.filters.borough,this.state.filterOptions.borough,T),this.MultiSelect(this.state.filters[Q],this.state.filterOptions[Q],Q),Object(j.jsx)(I,{variant:"contained",onClick:function(){alert("clicked")},children:"Filter"})]})}},{key:"render",value:function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{id:"header",children:Object(j.jsxs)(S.a,{collapsed:this.state.menuCollapse,style:L,children:[Object(j.jsxs)(S.d,{children:[Object(j.jsx)("div",{className:"logotext",children:Object(j.jsx)("p",{children:this.state.menuCollapse?Object(j.jsx)("div",{style:B,children:"A4"}):Object(j.jsx)("div",{style:B,children:"The City that Never Sleeps"})})}),Object(j.jsx)("div",{className:"closemenu",onClick:this.menuIconClick,children:this.state.menuCollapse?Object(j.jsx)("div",{className:"space",children:Object(j.jsx)(M.b,{color:"#ffdd99"})}):Object(j.jsx)("div",{className:"space",children:Object(j.jsx)(M.a,{color:"#ffdd99"})})})]}),!this.state.menuCollapse&&Object(j.jsx)("div",{children:Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{className:"space",children:Object(j.jsx)(S.b,{children:this.getSidebarContent()})}),Object(j.jsx)("div",{className:"bottom-space",children:Object(j.jsx)(S.c,{children:Object(j.jsx)("div",{style:F,children:"Horne, Phu, Price"})})})]})})]})})})}}]),a}(o.a.Component),E=a(284),G=a(276),A=Object(k.a)({root:{color:"#3a8589",height:3,padding:"13px 0"},thumb:{height:27,width:27,backgroundColor:"#fff",border:"1px solid currentColor",marginTop:-12,marginLeft:-13,boxShadow:"#ebebeb 0 2px 2px","&:focus, &:hover, &$active":{boxShadow:"#ccc 0 2px 3px 1px"},"& .bar":{height:9,width:1,backgroundColor:"currentColor",marginLeft:1,marginRight:1}},active:{},track:{height:3},rail:{color:"#d8d8d8",opacity:1,height:3}})(E.a),z=(o.a.Component,function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleDrawerOpen=function(){n.setState({openSidebar:!0})},n.handleDrawerClose=function(){n.setState({openSidebar:!1})},n.getMapData=function(){console.log("fetching data"),fetch("https://thecitythatneversleep.s3.us-east-2.amazonaws.com/allMapData.json").then((function(e){return e.json()})).then((function(e){console.log("success!"),n.setState({mapData:e,filteredData:JSON.parse(JSON.stringify(e))})})).catch((function(e){console.error(e)}))},n.updateMapData=function(e){var t,a=n.state.mapData,o=[],i=Object(s.a)(a);try{for(i.s();!(t=i.n()).done;){var r=t.value,c=!0;for(var l in e){var u=e[l],d=r[l];u.includes(d)||(c=!1)}c&&o.push(JSON.parse(JSON.stringify(r)))}}catch(h){i.e(h)}finally{i.f()}n.setState({filteredData:o})},n.state={mapData:[],filteredData:[],layers:[],iconData:[],startDatetime:"January 1, 2019, 00:00:00 AM",endDatetime:"March 31, 2021, 11:59:59 PM",openSidebar:!1,filterOptions:h.filterOptions},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.getMapData(),this.setState({filterOptions:h.filterOptions})}},{key:"render",value:function(e){return Object(j.jsxs)("div",{children:[Object(j.jsx)(m,{mapData:this.state.filteredData,viewState:e}),Object(j.jsx)(W,{updateMapData:this.updateMapData,open:this.state.openSidebar,filterOptions:this.state.filterOptions})]})}}]),a}(o.a.Component)),U=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,285)).then((function(t){var a=t.getCLS,n=t.getFID,o=t.getFCP,i=t.getLCP,r=t.getTTFB;a(e),n(e),o(e),i(e),r(e)}))};r.a.render(Object(j.jsx)(o.a.StrictMode,{children:Object(j.jsx)(z,{})}),document.getElementById("root")),U()}},[[228,1,2]]]);
//# sourceMappingURL=main.2bd61103.chunk.js.map