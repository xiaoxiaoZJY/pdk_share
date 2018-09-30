<template>
	<section>
		<el-col :span="4" class="search_content">
			<el-input v-model="input" placeholder="搜索专题关键词"></el-input>
			<el-button type="primary" icon="el-icon-search">搜索</el-button>
		</el-col>
		
		<el-button type="primary" @click="handleAdd" class="add_product">添加专题</el-button>
	    <!--列表-->
		<el-table :data="users" highlight-current-row v-loading="listLoading" @selection-change="selsChange" style="width: 100%;" border>
			<el-table-column type="selection" width="55">
			</el-table-column>
			<el-table-column prop="name" label="专题标题" width="300" >
			</el-table-column>
			<el-table-column prop="sex" label="负责人" width="140">
			</el-table-column>
			<el-table-column prop="age" label="创建时间" width="140">
			</el-table-column>
			<el-table-column prop="age" label="点击量" width="140">
			</el-table-column>
			<el-table-column prop="addr" label="摘要" min-width="150">
			</el-table-column>
			<el-table-column label="操作" width="150">
				<template scope="scope">
					<el-button size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
					<el-button type="danger" size="small" @click="handleDel(scope.$index, scope.row)">删除</el-button>
				</template>
			</el-table-column>
		</el-table>
		<!--工具条-->
		<el-col :span="24" class="toolbar">
		    <el-pagination layout="prev, pager, next" @current-change="handleCurrentChange" :page-size="20" :total="total" style="float:right;">
			</el-pagination>
		</el-col>
		<!-- 添加产品详细 待续。。。。。。-->
		<el-dialog title="新增" v-model="addFormVisible" :close-on-click-modal="false">
			<el-form :model="addForm" label-width="150px" :rules="addFormRules" ref="addForm">
				<el-form-item label="专题标题:">
					<el-input v-model="addForm.name"></el-input>
				</el-form-item>
				<el-form-item label="SEO标题:">
					<el-input v-model="addForm.sex"></el-input>
				</el-form-item>
				<el-form-item label="关键词:">
					<el-input v-model="addForm.name"></el-input>
				</el-form-item>
				<el-form-item label="专题负责人:">
					<el-select v-model="value" multiple filterable default-first-option placeholder= "请选择文章标签">
					    <el-option v-for="item in options5" :key="item.value" :label="item.label" :value="item.value">
					    </el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="点击量:">
					<el-input v-model="addForm.age"></el-input>
				</el-form-item>
				<el-form-item label="可用顾问:">
					<el-select v-model="value2" multiple filterable default-first-option placeholder= "请选择文章标签">
					    <el-option v-for="item in options5" :key="item.value" :label="item.label" :value="item.value">
					    </el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="关联产品:">
					<el-select v-model="value3" multiple filterable default-first-option placeholder= "请选择文章标签">
					    <el-option v-for="item in options5" :key="item.value" :label="item.label" :value="item.value">
					    </el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="关联案例:">
					<el-select v-model="value4" multiple filterable default-first-option placeholder= "请选择文章标签">
					    <el-option v-for="item in options5" :key="item.value" :label="item.label" :value="item.value">
					    </el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="公司介绍:">
					<el-input type="textarea" v-model="addForm.addr"></el-input>
				</el-form-item>
				<el-form-item label="项目展示:">
					<el-input type="textarea" v-model="addForm.name"></el-input>
				</el-form-item>
				<el-form-item label="企业logo:">
					<el-input v-model="addForm.name"></el-input>
				</el-form-item>  				
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click.native="addFormVisible = false">取消</el-button>
				<el-button type="primary" @click.native="addSubmit" :loading="addLoading">提交</el-button>
			</div>
		</el-dialog>
		<!--编辑界面一级分类-->
		<el-dialog title="编辑" v-model="editFormVisible" :close-on-click-modal="false">
			<el-form :model="editForm" label-width="150px" :rules="editFormRules" ref="editForm">
				<el-form-item label="专题标题:">
					<el-input v-model="addForm.name"></el-input>
				</el-form-item>
				<el-form-item label="SEO标题:">
					<el-input v-model="addForm.sex"></el-input>
				</el-form-item>
				<el-form-item label="关键词:">
					<el-input v-model="addForm.name"></el-input>
				</el-form-item>
				<el-form-item label="专题负责人:">
					<el-select v-model="value" multiple filterable default-first-option placeholder= "请选择文章标签">
					    <el-option v-for="item in options5" :key="item.value" :label="item.label" :value="item.value">
					    </el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="点击量:">
					<el-input v-model="addForm.age"></el-input>
				</el-form-item>
				<el-form-item label="可用顾问:">
					<el-select v-model="value2" multiple filterable default-first-option placeholder= "请选择文章标签">
					    <el-option v-for="item in options5" :key="item.value" :label="item.label" :value="item.value">
					    </el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="关联产品:">
					<el-select v-model="value3" multiple filterable default-first-option placeholder= "请选择文章标签">
					    <el-option v-for="item in options5" :key="item.value" :label="item.label" :value="item.value">
					    </el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="关联案例:">
					<el-select v-model="value4" multiple filterable default-first-option placeholder= "请选择文章标签">
					    <el-option v-for="item in options5" :key="item.value" :label="item.label" :value="item.value">
					    </el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="公司介绍:">
					<el-input type="textarea" v-model="addForm.addr"></el-input>
				</el-form-item>
				<el-form-item label="项目展示:">
					<el-input type="textarea" v-model="addForm.name"></el-input>
				</el-form-item>
				<el-form-item label="企业logo:">
					<el-input v-model="addForm.name"></el-input>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click.native="editFormVisible = false">取消</el-button>
				<el-button type="primary" @click.native="editSubmit" :loading="editLoading">提交</el-button>
			</div>
		</el-dialog>
	</section>
</template>
<script>
	import util from '../../common/js/util'
	//import NProgress from 'nprogress'
	import { getUserListPage, removeUser, batchRemoveUser, editUser, addUser } from '../../api/api';

	export default {
		data() {
			return {
				input: '',

				activeName2: 'first',
				filters: {
					name: ''
				},
				users: [],
				total: 0,
				page: 1,
				listLoading: false,
				sels: [],//列表选中列

				editFormVisible: false,//编辑界面是否显示
				editLoading: false,
				editFormRules: {
					name: [
						{ required: true, message: '请输入姓名', trigger: 'blur' }
					]
				},
				//编辑界面数据
				editForm: {
					id: 0,
					name: '',
					sex: -1,
					age: 0,
					birth: '',
					addr: ''
					// titleFir: '',
					// titleFirSeo: '',
					// titleFirKey: '',
					// titleFirDesc: '',
					// titleFirArr: '',
					// titleFirMast: ''
				},

				addFormVisible: false,//新增界面是否显示
				addLoading: false,
				addFormRules: {
					name: [
						{ required: true, message: '请输入姓名', trigger: 'blur' }
					]
				},
				//新增界面数据
				addForm: {
					name: '',
					sex: -1,
					age: 0,
					birth: '',
					addr: ''
					// titleFir: '',
					// titleFirSeo: '',
					// titleFirkey: '',
					// titleFirdesc: '',
					// titleFirarr: '',
					// titleFirmast: ''
				},
				// 测试数据
				options5: [{
		          value: 'HTML',
		          label: 'HTML'
		        }, {
		          value: 'CSS',
		          label: 'CSS'
		        }, {
		          value: 'JavaScript',
		          label: 'JavaScript'
		        }],
		        value: [],
		        value2: [],
		        value3: [],
		        value4: [],
			}
		},
		methods: {
			handleClick(tab, event) {
		        console.log(tab, event);
		    },
			//性别显示转换
			formatSex: function (row, column) {
				return row.sex == 1 ? '男' : row.sex == 0 ? '女' : '未知';
			},
			handleCurrentChange(val) {
				this.page = val;
				this.getUsers();
			},
			//获取用户列表
			getUsers() {
				let para = {
					page: this.page,
					name: this.filters.name
				};
				this.listLoading = true;
				//NProgress.start();
				getUserListPage(para).then((res) => {
					this.total = res.data.total;
					this.users = res.data.users;
					this.listLoading = false;
					//NProgress.done();
				});
			},
			//删除
			handleDel: function (index, row) {
				this.$confirm('确认删除该记录吗?', '提示', {
					type: 'warning'
				}).then(() => {
					this.listLoading = true;
					//NProgress.start();
					let para = { id: row.id };
					removeUser(para).then((res) => {
						this.listLoading = false;
						//NProgress.done();
						this.$message({
							message: '删除成功',
							type: 'success'
						});
						this.getUsers();
					});
				}).catch(() => {

				});
			},
			//显示编辑界面
			handleEdit: function (index, row) {
				this.editFormVisible = true;
				this.editForm = Object.assign({}, row);
				console.log(index)
				console.log(row)
			},
			//显示新增界面
			handleAdd: function () {
				this.addFormVisible = true;
				this.addForm = {
					name: '',
					sex: -1,
					age: 0,
					birth: '',
					addr: ''
				};
			},
			//编辑
			editSubmit: function () {
				this.$refs.editForm.validate((valid) => {
					if (valid) {
						this.$confirm('确认提交吗？', '提示', {}).then(() => {
							this.editLoading = true;
							//NProgress.start();
							let para = Object.assign({}, this.editForm);
							para.birth = (!para.birth || para.birth == '') ? '' : util.formatDate.format(new Date(para.birth), 'yyyy-MM-dd');
							editUser(para).then((res) => {
								this.editLoading = false;
								//NProgress.done();
								this.$message({
									message: '提交成功',
									type: 'success'
								});
								this.$refs['editForm'].resetFields();
								this.editFormVisible = false;
								this.getUsers();
							});
						});
					}
				});
			},
			//新增
			addSubmit: function () {
				this.$refs.addForm.validate((valid) => {
					if (valid) {
						this.$confirm('确认提交吗？', '提示', {}).then(() => {
							this.addLoading = true;
							//NProgress.start();
							let para = Object.assign({}, this.addForm);
							para.birth = (!para.birth || para.birth == '') ? '' : util.formatDate.format(new Date(para.birth), 'yyyy-MM-dd');
							addUser(para).then((res) => {
								this.addLoading = false;
								//NProgress.done();
								this.$message({
									message: '提交成功',
									type: 'success'
								});
								this.$refs['addForm'].resetFields();
								this.addFormVisible = false;
								this.getUsers();
							});
						});
					}
				});
			},
			selsChange: function (sels) {
				this.sels = sels;
			},
			//批量删除
			batchRemove: function () {
				var ids = this.sels.map(item => item.id).toString();
				this.$confirm('确认删除选中记录吗？', '提示', {
					type: 'warning'
				}).then(() => {
					this.listLoading = true;
					//NProgress.start();
					let para = { ids: ids };
					batchRemoveUser(para).then((res) => {
						this.listLoading = false;
						//NProgress.done();
						this.$message({
							message: '删除成功',
							type: 'success'
						});
						this.getUsers();
					});
				}).catch(() => {

				});
			}
		},
		mounted() {
			this.getUsers();
		}
	}

</script>
<style>
	.add_product{width: 108px;height: 28px;line-height: 28px;padding: 0px;font-size: 12px;margin-bottom: 16px;float: right;}
	.service_addr,.list_choose{padding-right: 20px;}
	.service_addr .el-select,.list_choose .el-select{width:100%;}
	.service_addr .el-select .el-input__inner,.list_choose .el-select .el-input__inner,.search_content .el-input__inner{height:28px!important;}
	.search_content button{width:20%;height: 28px;line-height: 28px;padding: 0px 5px;}
	.search_content button span{margin-left: 0px!important;}
	.search_content .el-input{width: 75%;vertical-align: top;}
</style>