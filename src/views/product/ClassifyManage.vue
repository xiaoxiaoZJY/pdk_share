<template>
	<section>
		<el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
		    <el-tab-pane label="一级分类" name="first">
				<el-button type="primary" @click="handleAdd">添加一级分类</el-button>
		    	<!--列表-->
				<el-table :data="users" highlight-current-row v-loading="listLoading" @selection-change="selsChange" style="width: 100%;" border>
					<el-table-column type="selection" width="45">
					</el-table-column>
					<el-table-column prop="name" label="一级分类标题" width="165">
					</el-table-column>
					<el-table-column prop="addr" label="栏目描述" min-width="300">
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
		    </el-tab-pane>
		    <el-tab-pane label="二级分类" name="second">
		    	<el-button type="primary" @click="handleAdd">添加二级分类</el-button>
		    	<!--列表-->
				<el-table :data="users" highlight-current-row v-loading="listLoading" @selection-change="selsChange" style="width: 100%;" border>
					<el-table-column type="selection" width="45">
					</el-table-column>
					<el-table-column prop="name" label="二级分类标题" width="165">
					</el-table-column>
					<el-table-column prop="addr" label="栏目描述" min-width="300">
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
		    </el-tab-pane>
		    <el-tab-pane label="三级分类" name="third">
		    	<el-button type="primary" @click="handleAdd">添加三级分类</el-button>
		    	<!--列表-->
				<el-table :data="users" highlight-current-row v-loading="listLoading" @selection-change="selsChange" style="width: 100%;" border>
					<el-table-column type="selection" width="45">
					</el-table-column>
					<el-table-column prop="name" label="三级分类标题" width="165">
					</el-table-column>
					<el-table-column prop="addr" label="栏目描述" min-width="300">
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
		    </el-tab-pane>
		</el-tabs>


		<!--编辑界面一级分类-->
		<el-dialog title="编辑" v-model="editFormVisible" :close-on-click-modal="false">
			<el-form :model="editForm" label-width="150px" :rules="editFormRules" ref="editForm">

				<el-form-item label="一级分类标题:">
					<el-input v-model="editForm.name"></el-input>
				</el-form-item>
				<el-form-item label="SEO标题:">
					<el-input v-model="editForm.age"></el-input>
				</el-form-item>
				<el-form-item label="关键词:">
					<el-input v-model="editForm.name"></el-input>
				</el-form-item>
				<el-form-item label="栏目描述:">
					<el-input type="textarea" v-model="editForm.addr"></el-input>
				</el-form-item>
				<el-form-item label="分类排名:">
					<el-input-number v-model="editForm.age" :min="0" :max="200"></el-input-number>
				</el-form-item>
				<el-form-item label="栏目负责人:">
					<el-select v-model="value" multiple filterable default-first-option placeholder= "请选择文章标签">
					    <el-option v-for="item in options5" :key="item.value" :label="item.label" :value="item.value">
					    </el-option>
					</el-select>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click.native="editFormVisible = false">取消</el-button>
				<el-button type="primary" @click.native="editSubmit" :loading="editLoading">提交</el-button>
			</div>
		</el-dialog>

		<!--新增界面一级页面-->
		<el-dialog title="新增" v-model="addFormVisible" :close-on-click-modal="false">
			<el-form :model="addForm" label-width="150px" :rules="addFormRules" ref="addForm">
				<el-form-item label="一级分类标题:">
					<el-input v-model="addForm.name"></el-input>
				</el-form-item>
				<el-form-item label="SEO标题:">
					<el-input v-model="addForm.age"></el-input>
				</el-form-item>
				<el-form-item label="关键词:">
					<el-input v-model="addForm.name"></el-input>
				</el-form-item>
				<el-form-item label="栏目描述:">
					<el-input type="textarea" v-model="addForm.addr"></el-input>
				</el-form-item>
				<el-form-item label="分类排名:">
					<el-input-number v-model="addForm.age" :min="0" :max="200"></el-input-number>
				</el-form-item>
				<el-form-item label="栏目负责人:">
					<el-select v-model="value" multiple filterable default-first-option placeholder= "请选择文章标签">
					    <el-option v-for="item in options5" :key="item.value" :label="item.label" :value="item.value">
					    </el-option>
					</el-select>
				</el-form-item>  				
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click.native="addFormVisible = false">取消</el-button>
				<el-button type="primary" @click.native="addSubmit" :loading="addLoading">提交</el-button>
			</div>
		</el-dialog>


		<!--编辑界面二级分类-->
		<!--新增界面二级页面-->

		<!--编辑界面三级分类-->
		<!--新增界面三级页面-->

	</section>
</template>

<script>
	import util from '../../common/js/util'
	//import NProgress from 'nprogress'
	import { getUserListPage, removeUser, batchRemoveUser, editUser, addUser } from '../../api/api';

	export default {
		data() {
			return {
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
		        value: []
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

<style scoped>
	.el-tab-pane .el-button--primary{width: 108px;height: 28px;line-height: 28px;padding: 0px;font-size: 12px;margin-bottom: 16px;float: right;}
</style>