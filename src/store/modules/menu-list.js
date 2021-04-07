import { MENU_LIST } from '../mutations'

function getMatchMenu (menuList, currentMenuName) {
  let node = null // 获取的子节点
  let code = 'label' //  匹配的属性
  let children = 'children' //  包含子节点的属性

  /**
     * 根据 NodeID 查找当前节点以及父节点
     * json    数据源
     * nodeId  匹配的值
     */
  let getNode = (json, nodeName) => {
    for (let i = 0; i < json.length; i++) {
      let obj = json[i]
      if (!nodeName) break
      if (!obj || !obj[code]) continue
      if (obj[code] == nodeName) {
        node = obj
        break
      } else {
        if (obj[children]) {
          getNode(obj[children], nodeName)
        } else {
          continue
        }
      }
    }
    return node
  }

  return getNode(menuList, currentMenuName)
};

const state = {
    list: [
        { moduleName: '学生管理', menuList: [
            { index: '1', label: '学生信息管理', children: [
                { index: '1-1', label: '学生列表', path: '/student/list'}
            ]}
        ]},
        { moduleName: '教职工管理', menuList: [
            { index: '1', label: '职工列表',  path: '/staff/list'},
        ]},
        { moduleName: '教务管理', menuList: [
            { index: '1', label: '专业管理', children: [
                // { index: '1-1', label: '办学层次',  path: '/school-running/list'},
                { index: '1-2', label: '专业列表',  path: '/profession/list'},
                // { index: '1-3', label: '专业方向',  path: '/profession-direction/list'},
            ]},
            { index: '2', label: '课程管理', children: [
                { index: '2-1', label: '课程学科',  path: '/course-subject/list'},
            ]},
            { index: '3', label: '人才培养方案', children: [
                { index: '3-1', label: '培养方案',  path: '/training-program/list'},
                // { index: '3-2', label: '技能鉴定管理',  path: '/skills-critical/list'},
            ]},
        ]},
        { moduleName: '年级班级', menuList: [
            { index: '1', label: '学年学期',  path: '/semester/list'},
            { index: '2', label: '年级管理',  path: '/grade/list'},
        ]},
        { moduleName: '学校管理', menuList: [
            { index: '1', label: '学校信息',  path: '/school/info'},
            { index: '2', label: '校区管理', children: [
                { index: '2-1', label: '校区列表',  path: '/campus/list'},
            ]},
            // { index: '3', label: '学校领导', children: [
            //     { index: '3-1', label: '领导列表',  path: '/leader/list'},
            // ]},
            { index: '4', label: '机构管理',  children: [
                // { index: '4-1', label: '机构维度',  path: '/dimension/list'},
                { index: '4-2', label: '组织机构',  path: '/organization/list'},
            ]},
            { index: '5', label: '合作企业', children: [
                { index: '5-1', label: '合作企业列表',  path: '/enterprise/list'},
            ]},
            { index: '6', label: '房产设施管理', children: [
                { index: '6-1', label: '建筑物管理', children: [
                    { index: '6-1-1', label: '建筑物列表',  path: '/building/list'},
                    { index: '6-1-3', label: '教室管理',  children: [
                        { index: '6-1-3-1', label: '教室列表',  path: '/classroom/list'},
                    ]},
                    { index: '6-1-4', label: '寝室管理',  children: [
                        { index: '6-1-4-1', label: '寝室列表',  path: '/dormitory/list'},
                        // { index: '6-1-4-2', label: '寝室类型',  path: '/dormitory-type/list'},
                    ]},
                ]},
            ]},
            { index: '7', label: '数据字典管理', children: [
                { index: '7-1', label: '数据字典列表', path: '/dictionary/list' }
            ]},
        ]},
        
        { moduleName: '数据分析', menuList: [
            { index: '1', label: '校情数据分析', path: '/data-analysis/school-situation'},
            { index: '2', label: '招生数据分析', path: '/data-analysis/enrollmentInfor-situation' },
            { index: '3', label: '学籍数据分析', path: '/data-analysis/schoolRoll-situation'}
        ]},
        // { moduleName: '图表展示', menuList: [
        //     { index: '1', label: '数据中台-整体概况', path: '/show/1'},
        //     { index: '2', label: '数据中台-教师情况', path: '/show/2'},
        //     { index: '3', label: '数据中台-学生情况', path: '/show/3'}
        // ]},
        // { moduleName: '数据中心API列表展示', menuList: [
        //     { index: '1', label: 'API详情查看页面', path: '/data/list'}
        // ]},
    ],
    activeModuleName: '',
    activeMenuIndex: '-1',
    activeMenuName: '',
  list: [
    { moduleName: '学生管理',
      menuList: [
        { index: '1',
          label: '学生信息管理',
          children: [
            { index: '1-1', label: '学生列表', path: '/student/list'}
          ]}
      ]},
    { moduleName: '教职工管理',
      menuList: [
        { index: '1', label: '职工列表', path: '/staff/list'}
      ]},
    { moduleName: '教务管理',
      menuList: [
        { index: '1',
          label: '专业管理',
          children: [
            { index: '1-1', label: '办学层次', path: '/school-running/list'},
            { index: '1-2', label: '专业列表', path: '/profession/list'},
            { index: '1-3', label: '专业方向', path: '/profession-direction/list'}
          ]},
        { index: '2',
          label: '课程管理',
          children: [
            { index: '2-1', label: '课程学科', path: '/course-subject/list'}
          ]},
        { index: '3',
          label: '人才培养方案',
          children: [
            { index: '3-1', label: '培养方案', path: '/training-program/list'},
            { index: '3-2', label: '技能鉴定管理', path: '/skills-critical/list'}
          ]}
      ]},
    { moduleName: '年级班级',
      menuList: [
        { index: '1', label: '学年学期', path: '/semester/list'},
        { index: '2', label: '年级管理', path: '/grade/list'}
      ]},
    { moduleName: '学校管理',
      menuList: [
        { index: '1', label: '学校信息', path: '/school/info'},
        { index: '2',
          label: '校区管理',
          children: [
            { index: '2-1', label: '校区列表', path: '/campus/list'}
          ]},
        { index: '3',
          label: '学校领导',
          children: [
            { index: '3-1', label: '领导列表', path: '/leader/list'}
          ]},
        { index: '4',
          label: '机构管理',
          children: [
            { index: '4-1', label: '机构维度', path: '/dimension/list'},
            { index: '4-2', label: '组织机构', path: '/organization/list'}
          ]},
        { index: '5',
          label: '合作企业',
          children: [
            { index: '5-1', label: '合作企业列表', path: '/enterprise/list'}
          ]},
        { index: '6',
          label: '房产设施管理',
          children: [
            { index: '6-1',
              label: '建筑物管理',
              children: [
                { index: '6-1-1', label: '建筑物列表', path: '/building/list'},
                { index: '6-1-3',
                  label: '教室管理',
                  children: [
                    { index: '6-1-3-1', label: '教室列表', path: '/classroom/list'}
                  ]},
                { index: '6-1-4',
                  label: '寝室管理',
                  children: [
                    { index: '6-1-4-1', label: '寝室列表', path: '/dormitory/list'},
                    { index: '6-1-4-2', label: '寝室类型', path: '/dormitory-type/list'}
                  ]}
              ]}
          ]},
        { index: '7',
          label: '数据字典管理',
          children: [
            { index: '7-1', label: '数据字典列表', path: '/dictionary/list' }
          ]}
      ]},

    { moduleName: '数据分析',
      menuList: [
        { index: '1', label: '校情数据分析', path: '/data-analysis/school-situation'},
        { index: '2', label: '招生数据分析', path: '/data-analysis/enrollmentInfor-situation' },
        { index: '3', label: '学籍数据分析', path: '/data-analysis/schoolRoll-situation'}
      ]},
    // { moduleName: '图表展示', menuList: [
    //     { index: '1', label: '数据中台-整体概况', path: '/show/1'},
    //     { index: '2', label: '数据中台-教师情况', path: '/show/2'},
    //     { index: '3', label: '数据中台-学生情况', path: '/show/3'}
    // ]},
    // { moduleName: '数据中心API列表展示', menuList: [
    //     { index: '1', label: 'API详情查看页面', path: '/data/list'}
    // ]},
    { moduleName: '系统管理',
      menuList: [
        { index: '1',
          label: '角色管理',
          children: [
            { index: '1-1', label: '角色列表', path: '/role/list'}
          ]
        },
        { index: '2',
          label: '用户管理',
          children: [
            { index: '2-1', label: '用户列表', path: '/user/list'}
          ]
        }
      ]}
  ],
  activeModuleName: '',
  activeMenuIndex: '-1',
  activeMenuName: ''

}

const getters = {
  // 模块名数组
  modules: () => {
    return state.list.map(item => item.moduleName)
  },
  // 获取相应模块下的菜单列表
  menuList: () => {
    let current = state.list.filter(item => item.moduleName === state.activeModuleName)
    return current.length ? current[0].menuList : []
  }
}

const mutations = {
  // 设置当前的模块名
  [MENU_LIST.SET_ACTICE_MODULE_NAME] (state, moduleName) {
    state.activeModuleName = moduleName
  },
  // 设置当前菜单的index
  [MENU_LIST.SET_ACTICE_MENU_INDEX] (state, menuIndex) {
    state.activeMenuIndex = menuIndex
  },
  // 设置当前菜单的name，设置index
  [MENU_LIST.SET_ACTICE_MENU_NAME] (state, menuName) {
    state.activeMenuName = menuName

    // 设置当前菜单的index
    let menuList = getters.menuList()
    let current = getMatchMenu(menuList, state.activeMenuName)
    if (current === null) return // 未找到相应菜单
    state.activeMenuIndex = current.index
  }
}

export default {
  state,
  getters,
  mutations
}
