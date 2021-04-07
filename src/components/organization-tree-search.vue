<template>
    <div style="min-width: 300px;min-height: 200px;max-height:500px;">
        <el-input placeholder="输入关键字进行过滤" v-model="filterText"></el-input>
        <el-tree ref="OrganizationTreeSearch" :data="data" :props="props" :highlight-current="true" :expand-on-click-node="false" default-expand-all 
        :filter-node-method="filterNode" @node-click="haddleSelectNode">
            <span class="custom-tree-node" slot-scope="{ node, data }">
                <el-tooltip class="item" effect="dark" :content="node.label + '（' + data.content +'）'" placement="top">
                    <span>{{ node.label }}</span>
                </el-tooltip>
            </span>
        </el-tree>
    </div>
</template>
<script>
import { OrganizationTree } from "@/components";
export default {
    name: 'OrganizationTreeSearch',
    data(){
        return {
            filterText: '',
            props: {
                children: 'children',
                label: 'label'
            },
            data: [{
                label: '学校',
                content: '',
                children: [{
                    label: '四川理工学院黄岭校区',
                    content: '01 校区'
                },
                {
                    label: '四川理工学院汇北校区',
                    content: '02 校区'
                },
                {
                    label: '四川理工学院汇南校区',
                    content: '03 校区',
                    children: [{
                        label: '教务处',
                        content: '03001  职能部门',
                    },
                    {
                        label: '学生处',
                        content: '03002  职能部门',
                    }]
                }]
            }],
        }
    },
    watch: {
      filterText(val) {
        this.$refs.OrganizationTreeSearch.filter(val);
      }
    },
    methods: {
        /**
         * 过滤
         */
        filterNode(value, data) {
            if (!value) return true;
            return data.label.indexOf(value) !== -1;
        },
        /**
         * 选中的机构
         */
        haddleSelectNode(node){
            this.$emit('selectNode', node)
        },
    },
    components: {
        OrganizationTree
    }
}
</script>
