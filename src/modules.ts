export type ModuleGroup = '业务运营' | '组织治理' | '平台底座'

export interface ProductModule {
  code: string
  name: string
  description: string
  category: ModuleGroup
  repository: string
  tone: string
}

const gitee = 'https://gitee.com/art-si/'

export const modules: ProductModule[] = [
  {
    code: 'SCM',
    name: '供应链管理',
    description: '连接报价、销售合同、订单、发运与供应链协同。',
    category: '业务运营',
    repository: `${gitee}art-supabase-scm`,
    tone: 'blue',
  },
  {
    code: 'MDM',
    name: '主数据管理',
    description: '统一物料、组织与业务对象的基础身份。',
    category: '平台底座',
    repository: `${gitee}art-supabase-mdm`,
    tone: 'violet',
  },
  {
    code: 'MES',
    name: '制造执行',
    description: '面向生产计划、现场执行、质量与过程追溯。',
    category: '业务运营',
    repository: `${gitee}art-supabase-mes`,
    tone: 'orange',
  },
  {
    code: 'WMS',
    name: '仓储管理',
    description: '规划库存身份、入出库作业与仓储协同。',
    category: '业务运营',
    repository: `${gitee}art-supabase-wms`,
    tone: 'teal',
  },
  {
    code: 'TMS',
    name: '智慧运输',
    description: '贯通开单、配载、在途、签收与运输结算。',
    category: '业务运营',
    repository: `${gitee}art-supabase-tms`,
    tone: 'cyan',
  },
  {
    code: 'VMS',
    name: '车辆管理',
    description: '覆盖车辆档案、保险、维保、事故与健康研判。',
    category: '业务运营',
    repository: `${gitee}art-supabase-vms`,
    tone: 'indigo',
  },
  {
    code: 'FMS',
    name: '财务管理',
    description: '连接运输结算、资金、核算、票据与财务报表。',
    category: '组织治理',
    repository: `${gitee}art-supabase-fms`,
    tone: 'mint',
  },
  {
    code: 'HR',
    name: '人力资源',
    description: '围绕组织、员工、招聘、考勤、薪酬与绩效。',
    category: '组织治理',
    repository: `${gitee}art-supabase-hr`,
    tone: 'rose',
  },
  {
    code: 'SMIS',
    name: '安全生产',
    description: '管理安全基础、资质培训、设备与应急事件。',
    category: '组织治理',
    repository: `${gitee}art-supabase-smis`,
    tone: 'amber',
  },
  {
    code: 'PMIS',
    name: '设备管理',
    description: '聚焦点检、巡检、保养、维修与能耗治理。',
    category: '业务运营',
    repository: `${gitee}art-supabase-pmis`,
    tone: 'slate',
  },
]

export const links = {
  demo: 'https://art-si.github.io/art-supabase-pro/',
  docs: 'https://art-si.github.io/art-supabase-doc/',
  source: `${gitee}art-supabase-pro`,
  driver: `${gitee}supabase-mobile-tms-driver`,
}
