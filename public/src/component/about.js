import React,{PropTypes} from 'react'

export default class About extends React.Component{
	render(){
		return (
	<div className="clearfixs mr_created mr_preview">
		<div className="mr_myresume_l mrcenter">
			<div id="mr_mr_head">
				<div className="m_portrait mr_top_bg">
					<img src="http://www.lagou.com//images/myresume/tou.png" className="opa" alt="" />
					<img src="http://www.lagou.com/i/image/M00/57/60/CgqKkVfPUT-AZd2ZAAA0WUv6lvw41.jpeg" width="120" height="120" alt="" />
				</div>
				<div className="mr_baseinfo">
					<i className="mr_left_bg"></i>
					<i className="mr_right_bg"></i>
					<div className="mr_p_name mr_w604 clearfixs">
						<span className="mr_name">唐凯</span>
					</div>
					<div className="mr_p_introduce mr_w604 clearfixs">
						<span className="mr_intro">hello&nbsp;world</span>
					</div>
					<div className="mr_p_info mr_infoed mr_w604 clearfixs">
						<div className="info_t">
									<span className="shenfen">
										<i></i>
										计算机科学与技术 · 贵州大学
									</span>
						</div>
						<div className="info_t">
							<span className="base_info"><i></i>男&nbsp;&nbsp;&nbsp;22岁&nbsp;&nbsp;&nbsp;本科
							<span className="job_span">&nbsp;1年工作经验</span><span className="birth_span dn">1994.08年出生</span>&nbsp;&nbsp;&nbsp;北京</span>
						</div>
						<div className="info_b">
							<span className="mobile"><i></i>18519772682</span>&nbsp;&nbsp;
							<span className="email"><i></i>tangkai123456@live.com</span>
						</div>
						<div className="mr_sns">
							<a href="https://github.com/tangkai123456" target="_blank" data-sns="6" data-site="https://github.com/tangkai123456"><span><em></em></span></a>
						</div>
					</div>
				</div>
			</div>

			<div className="mr_content">
				<div className="mr_w604">
					<div id="workExperience">
						<div>
							<div className="mr_moudle_head clearfixs">
								<div className="mr_head_l">
									<div className="mr_title">
										<span className="mr_title_l"></span><span className="mr_title_c"> 工作经历  </span><span className="mr_title_r"></span>
									</div>
								</div>
							</div>
							<div className="mr_moudle_content">
							<div className="list_show">
								<div className="mr_jobe_list">
								<div className="clearfixs">
									<div className="mr_content_l">
										<div className="l2">
											<h4>贵州鼎慧科技有限公司</h4>
											<span>前端</span>
										</div>
									</div>
									<div className="mr_content_r">
										<span>2016.03 -- 2016.10</span>
									</div>
								</div>

								<div className="mr_content_m olpf">
									<p>1、根据产品设计的需求，配合后台开发人员实现产品的界面以及功能，维护及优化前端页面性能。</p>
									<p>2、参与设计并且编写web前端构架以及应用。</p>
									<p>3、产品、设计、后台开发各个部门沟通，利用HTML以及JavaScript等相关技术开发网站和客户端的前端页面。</p>
									<p>4、利用css3以及JavaScript构建公司的网站，将公司的信息以及产品的介绍通过HTML的页面展示出来，并且保证产品信息的更新。</p>
								</div>
								</div>
							</div>
							</div>
						</div>
					</div>

					<div id="educationalBackground">
						<div>
							<div className="mr_moudle_head clearfixs">
								<div className="mr_head_l">
									<div className="mr_title">
										<span className="mr_title_l"></span><span className="mr_title_c">教育经历</span><span className="mr_title_r"></span>
									</div>
								</div>
							</div>
							<div className="mr_moudle_content">
							<div className="list_show">
								<div className="clearfixs mb46 mr_jobe_list">
									<div className="mr_content_l">
										<div className="l1">
											<img src="http://www.lagou.com/images/schoolBadge/19e11ba95e1a4758bdd21adea13e6a99.jpeg"/>
										</div>
										<div className="l2">
											<h4>贵州大学</h4>
											<span>本科 · 计算机科学与技术</span>
										</div>
									</div>
									<div className="mr_content_r">
										<span>2016年毕业</span>
									</div>
								</div>
							</div>
							</div>
						</div>
					</div>

					<div id="projectExperience">
						<div>
							<div className="mr_moudle_head clearfixs">
								<div className="mr_head_l">
									<div className="mr_title">
										<span className="mr_title_l"></span><span className="mr_title_c">项目经验</span><span className="mr_title_r"></span>
									</div>
								</div>
							</div>
							<div className="mr_moudle_content" id="projectList">
								<div className="mr_jobe_list">
								<div className="clearfixs">
									<div className="mr_content_l">
										<div className="l2">
											<a className="projectTitle"  target="_blank" href="http://www.tangkai123456.xyz/"><span></span>个人博客</a>
											<p>全栈</p>
										</div>
									</div>

									<div className="mr_content_r">
										<span>2016.12 -- 2016.12</span>
									</div>
								</div>
								<div className="mr_content_m olpf">
									<p>使用react+react-router构建前台页面，所有状态交由redux管理。</p>
<p>后台使用nodejs的express框架+mongodb进行数据操作与存储。</p>
<p>项目部署在腾讯云上</p>
								</div>
								</div>
								<div className="mr_jobe_list">
								<div className="clearfixs">
									<div className="mr_content_l">
										<div className="l2">
											<a className="projectTitle"  target="_blank" href="http://tangkai123456.xyz:3000/others/other/fullpage/index.html"><span></span>组件式开发全屏滚动网页</a>
											<p>前端</p>
										</div>
									</div>

									<div className="mr_content_r">
										<span>2016.11 -- 2016.11</span>
									</div>
								</div>
								<div className="mr_content_m olpf">
									<p>编写全屏滚动网页展示信息，分页使用fullPage库完成，链式调用组件加载页面，详细信息展示使用canvas实现。</p>
								</div>
								</div>
								<div className="mr_jobe_list">
								<div className="clearfixs">
									<div className="mr_content_l">
										<div className="l2">
											<a className="projectTitle"  target="_blank" href="http://tangkai123456.xyz:3000/others/"><span></span>个人简介网页（视差滚动）</a>
											<p>前端</p>
										</div>
									</div>

									<div className="mr_content_r">
										<span>2016.11 -- 2016.11</span>
									</div>
								</div>
								<div className="mr_content_m olpf">
									<p>使用skrollr库，制作视差滚动特效的个人简历网站</p>
								</div>
								</div>
								<div className="mr_jobe_list">
								<div className="clearfixs">
									<div className="mr_content_l">
										<div className="l2">
											<a className="projectTitle nourl">仿写糗事百科</a>
											<p>前端</p>
										</div>
									</div>

									<div className="mr_content_r">
										<span>2016.11 -- 2016.11</span>
									</div>
								</div>
								<div className="mr_content_m olpf">
									<p>使用webpack&nbsp;+&nbsp;react&nbsp;+&nbsp;react-router&nbsp;+&nbsp;nodejs&nbsp;+&nbsp;mongodb完成糗事百科部分功能</p>
								</div>
								</div>
							</div>
						</div>
					</div>

					<div id="selfDescription">
						<div>
							<div className="mr_moudle_head clearfixs">
								<div className="mr_head_l">
									<div className="mr_title">
										<span className="mr_title_l"></span><span className="mr_title_c">自我描述</span><span className="mr_title_r"></span>
									</div>
								</div>
							</div>
							<div className="mr_moudle_content clearfixs">
								<div className="mr_self_l">

									<i></i>
									<img src="http://www.lagou.com/i/image/M00/57/60/CgqKkVfPUT-AZd2ZAAA0WUv6lvw41.jpeg" alt="唐凯"/>
								</div>
								<div className="mr_self_r">
									<p>个人主页:www.tangkai123456.xyz</p>
<p>git:&nbsp;tangkai123456</p>
<p>熟练使用react、react-router、redux进行组件化开发，组件复用程度高。</p>
<p>熟悉es6，喜欢尝试新特性。</p>
<p>熟悉nodejs，常用express等框架编写后端逻辑。</p>
<p>能使用webpack、git对项目打包和版本控制。</p>
<p>熟练编写各种常用特效，以及ajax数据交互。</p>
<p>熟练使用bootstrap完成体验良好的响应式页面。</p>
<p></p>
<p></p>
<p></p>
<p>诚实开朗，思维活跃，喜欢学习新技术</p>
								</div>
							</div>
						</div>
					</div>
					
					<div id="expectJob">
						<div>
						<div className="mr_moudle_head clearfixs mr_w604">
							<div className="mr_head_l">
								<div className="mr_title">
									<span className="mr_title_l"></span><span className="mr_title_c">期望工作</span><span className="mr_title_r"></span>
								</div>
							</div>
						</div>
						<div className="mr_moudle_content clearfixs mr_w604">
							<div className="expectjob_list">
								<input id="expHideId" type="hidden" value="$!expectJobses.id" />
								<div className="mr_job_info" data-id="$!expectJobses.id">
									<ul className="clearfixs">
										<li className="mr_name_li" ><i></i><span className="mr_job_name" title="前端工程师">前端工程师</span></li>
										<li className="mr_jobtype_li"> <i></i><span className="mr_job_type" title="$!expectJobses.positionType">全职</span></li>
										<li className="mr_city_li"> <i></i><span className="mr_job_adr" title="$!expectJobses.city">北京</span></li>
										<li className="mr_jobrange_li" ><i></i><span className="mr_job_range" title="$!expectJobses.salarys">5k-10k</span></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					</div>

					<div id="skillsAssess">
						<div>
							<div className="mr_moudle_head clearfixs">
								<div className="mr_head_l">
									<div className="mr_title">
										<span className="mr_title_l"></span><span className="mr_title_c">技能评价</span><span className="mr_title_r"></span>
									</div>
								</div>
							</div>
							<div className="mr_moudle_content">
								<div className="mr_skill_con">
									<span className="mr_skill_name" title="html+css">html+css</span>
									<span className="mr_skill_plan" data-skillLevel = "70">
									 <em style={{width: "70%"}}></em>
									</span>
									<span className="mr_skill_level">精通</span>
								</div>
								<div className="mr_skill_con">
									<span className="mr_skill_name" title="js、jq">js、jq</span>
									<span className="mr_skill_plan" data-skillLevel = "72">
									 <em style={{width: "72%"}}></em>
									</span>
									<span className="mr_skill_level">精通</span>
								</div>
								<div className="mr_skill_con">
									<span className="mr_skill_name" title="react、angular">react、angular</span>
									<span className="mr_skill_plan" data-skillLevel = "58">
									 <em style={{width: "58%"}}></em>
									</span>
									<span className="mr_skill_level">掌握</span>
								</div>
								<div className="mr_skill_con">
									<span className="mr_skill_name" title="nodejs">nodejs</span>
									<span className="mr_skill_plan" data-skillLevel = "46">
									 <em style={{width: "46%"}}></em>
									</span>
									<span className="mr_skill_level">掌握</span>
								</div>
								<div className="mr_skill_con">
									<span className="mr_skill_name" title="webpack、git">webpack、git</span>
									<span className="mr_skill_plan" data-skillLevel = "36">
									 <em style={{width: "36%"}}></em>
									</span>
									<span className="mr_skill_level">熟悉</span>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="mr_self_state">
   	 				<div className="form_wrap mr_self_s resume_status">
						·&nbsp;我目前已离职，可快速到岗&nbsp;·
	   	 			</div>
				</div>
			</div>
		  </div>
	    </div>
			)
	}
}