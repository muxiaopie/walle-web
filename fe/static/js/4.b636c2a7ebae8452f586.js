webpackJsonp([4],{CMUu:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=r("Xxa5"),n=r.n(s),i=r("exGp"),o=r.n(i),a=r("Dd8w"),l=r.n(a),c=r("woOf"),u=r.n(c),m=r("oZit"),d=r("diZN");function f(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(d.b)("role/",e,l()({},t,{isRemoveField:!0}))}var p=r("bZyb"),b=r("ArRN"),h={props:{members:{type:Array,default:function(){return[]}},value:String,spaceId:[String,Number]},data:function(){return{keyword:"",existMembers:[],noExist:!1}},created:function(){var e=this;return o()(n.a.mark(function t(){return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e.getExistMembers();case 1:case"end":return t.stop()}},t,e)}))()},watch:{value:{immediate:!0,handler:function(e){this.keyword=e}},spaceId:function(e){e&&this.getExistMembers()}},computed:{userIds:function(){return this.members.map(function(e){return e.id})}},methods:{handleSelect:function(e){this.noExist||this.$emit("select",e)},getExistMembers:function(){var e=this;return o()(n.a.mark(function t(){var r,s;return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.spaceId){t.next=6;break}return t.next=3,Object(b.c)(e.spaceId);case 3:r=t.sent,s=r.data.members,e.existMembers=s;case 6:case"end":return t.stop()}},t,e)}))()},querySearchAsync:function(e,t){var r=this,s=this.existMembers.filter(function(e){return-1===r.userIds.indexOf(e.id)});if(s.length>0)this.noExist=!1,t(s);else{this.noExist=!0,t([{username:"没有可添加的用户了"}])}},resultlight:function(e,t){if(!e)return"";if(!t)return e;var r=new RegExp(t,"ig");return e.toString().replace(r,function(e){return"<span class='highlight'>"+e+"</span>"})}}},v={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"wl-project-search"},[r("el-autocomplete",{attrs:{size:"small","popper-class":"wl-project-search__input","fetch-suggestions":e.querySearchAsync,placeholder:"请输入用户名"},on:{select:e.handleSelect},scopedSlots:e._u([{key:"default",fn:function(t){var s=t.item;return[r("span",{domProps:{innerHTML:e._s(e.resultlight(s.username,e.keyword))}})]}}]),model:{value:e.keyword,callback:function(t){e.keyword=t},expression:"keyword"}},[r("template",{slot:"suffix"},[r("i",{staticClass:"el-icon-search"})])],2)],1)},staticRenderFns:[]};var _=r("VU/8")(h,v,!1,function(e){r("R7rc")},null,null).exports,w={props:{visible:{type:Boolean,default:!1},roles:{type:Object},member:Object},data:function(){return{form:this.initForm()}},watch:{member:function(e){e?u()(this.form,l()({},e)):this.form=this.initForm()}},methods:{onOk:function(){var e=this;this.$refs.form.validate(function(t){if(!t)return!1;e.$emit("update:visible"),e.$emit("confirm",e.form)})},onCancel:function(){this.$emit("update:visible"),this.$emit("close")},initForm:function(){return{role:""}}}},g={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-dialog",{staticClass:"wl-edit-member",attrs:{width:"600px",title:"编辑成员",visible:e.visible,"before-close":e.onCancel,"append-to-body":!0}},[r("el-form",{ref:"form",attrs:{model:e.form}},[r("el-form-item",{attrs:{label:"成员角色"}},[r("el-select",{style:{width:"400px"},attrs:{size:"small",placeholder:"请分配角色"},model:{value:e.form.role,callback:function(t){e.$set(e.form,"role",t)},expression:"form.role"}},e._l(e.roles,function(e,t){return r("el-option",{key:t,attrs:{label:e,value:t}})}))],1)],1),e._v(" "),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{attrs:{size:"small",type:"primary"},on:{click:e.onOk}},[e._v("确定")]),e._v(" "),r("el-button",{attrs:{size:"small"},on:{click:e.onCancel}},[e._v("取消")])],1)],1)},staticRenderFns:[]};var x={components:{SelectUser:_,EditMemberDialog:r("VU/8")(w,g,!1,function(e){r("cH+Y")},null,null).exports},props:{id:{type:String,required:!0},space:{type:String,required:!0}},data:function(){return{breadcrumbData:[{to:"/"+this.space+"/project/index",name:"项目"},{to:"",name:"成员管理"}],defaultIcon:"https://gw.alipayobjects.com/zos/rmsportal/eHBsAsOrrJcnvFlnzNTT.png",form:{username:"",role_id:""},rules:{role_id:[{required:!0,message:"请选择角色",trigger:"blur"}]},error:{username:""},members:[],roles:p.c,project:null,editDialogVisible:!1,editCurrentMember:null}},created:function(){this.getProject()},computed:{isNew:function(){return void 0===this.id},spaceId:function(){return this.project?this.project.space_id:""}},watch:{"form.username":{handler:function(e){e&&(this.error.username="")}}},methods:{handleFilterSelect:function(e){u()(this.form,l()({},e))},addMember:function(){var e=this,t=!0;this.form.username||(this.error.username="请选择用户名",t=!1),this.$refs.form.validate(function(r){if(!r||!t)return!1;var s=[{user_id:e.form.user_id,role:e.form.role_id}];e.updateProject(s)})},getProject:function(){var e=this;return o()(n.a.mark(function t(){var r,s;return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(m.c)(e.id);case 2:r=t.sent,s=r.data,e.project=s,e.members=s.members||[];case 6:case"end":return t.stop()}},t,e)}))()},updateProject:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return o()(n.a.mark(function r(){return n.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Object(m.f)(e.id,e.requestForm(t));case 2:e.form={username:"",role_id:""},e.getProject();case 4:case"end":return r.stop()}},r,e)}))()},getRoles:function(){var e=this;return o()(n.a.mark(function t(){var r,s;return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f();case 2:r=t.sent,s=r.data.list,e.roles=s;case 5:case"end":return t.stop()}},t,e)}))()},requestForm:function(e){return[].concat(this.members,e)},editItem:function(e){this.editDialogVisible=!0,this.editCurrentMember=e},deleteItem:function(e){var t=e.id;this.members=this.members.filter(function(e){return e.id!==t}),this.updateProject()},confirm:function(e){u()(this.editCurrentMember,l()({},e)),this.updateProject()}}},y={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"wl-project-member"},[r("wl-breadcrumb",{attrs:{data:e.breadcrumbData}}),e._v(" "),r("el-card",[r("div",{staticClass:"wl-project-member__add-header"},[e._v("\n            添加成员\n        ")]),e._v(" "),r("div",{staticClass:"wl-project-member__add-body"},[r("el-form",{ref:"form",attrs:{model:e.form,"label-width":"80px",size:"small",rules:e.rules}},[r("el-form-item",{attrs:{label:"成员名称",prop:"username",error:e.error.username}},[r("select-user",{ref:"selectUser",attrs:{members:e.members,value:e.form.username,spaceId:e.spaceId},on:{select:e.handleFilterSelect}})],1),e._v(" "),r("el-form-item",{attrs:{label:"成员角色",prop:"role_id"}},[r("el-select",{style:{width:"400px"},attrs:{size:"small",placeholder:"请分配角色"},model:{value:e.form.role_id,callback:function(t){e.$set(e.form,"role_id",t)},expression:"form.role_id"}},e._l(e.roles,function(e,t){return r("el-option",{key:t,attrs:{label:e,value:t}})}))],1)],1)],1),e._v(" "),r("div",{staticClass:"wl-project-member__add-footer"},[r("el-button",{attrs:{type:"primary",size:"small"},on:{click:e.addMember}},[e._v("添加")])],1)]),e._v(" "),r("div",{staticClass:"wl-project-member__list-container"},[r("div",{staticClass:"wl-project-member__add-header"},[e._v(e._s("成员列表 ("+e.members.length+")"))]),e._v(" "),r("div",e._l(e.members,function(t){return r("div",{key:t.id,staticClass:"wl-project-member__user-row"},[r("div",{staticClass:"wl-project-member__user-info"},[r("img",{staticClass:"icon",attrs:{src:t.avatar||e.defaultIcon}}),e._v(" "),r("span",{staticClass:"wl-group-users__name"},[e._v(e._s(t.username))])]),e._v(" "),r("div",{staticClass:"wl-project-member__tool"},[r("span",{staticClass:"role-name"},[e._v(e._s(e.roles[t.role]))]),e._v(" "),r("el-button",{attrs:{type:"primary",size:"small",icon:"el-icon-edit",circle:""},on:{click:function(){e.editItem(t)}}}),e._v(" "),r("el-button",{attrs:{type:"danger",size:"small",icon:"el-icon-delete",circle:""},on:{click:function(){e.deleteItem(t)}}})],1)])}))]),e._v(" "),r("edit-member-dialog",{attrs:{visible:e.editDialogVisible,roles:e.roles,member:e.editCurrentMember},on:{"update:visible":function(t){e.editDialogVisible=t},confirm:e.confirm}})],1)},staticRenderFns:[]};var j=r("VU/8")(x,y,!1,function(e){r("DGQJ")},null,null);t.default=j.exports},DGQJ:function(e,t){},R7rc:function(e,t){},"cH+Y":function(e,t){}});