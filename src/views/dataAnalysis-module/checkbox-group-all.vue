<template>
    <div>
        <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
        <el-checkbox-group class="group-box" v-model="checkedList" @change="handleCheckedCitiesChange">
            <el-checkbox :style="{display: block ? 'block' : 'inline-block'}" v-for="(item, index) in checkboxList" :label="item.value" :key="index">{{item.label}}</el-checkbox>
        </el-checkbox-group>
    </div>
</template>
<script>
export default {
    props: {
        block: {
            type: Boolean,
            default: () => false
        },
        checkboxList: {
            type: Array,
            default: () => []
        }
    },
    data () {
        return {
            checkAll: false,
            checkedList: [],
            isIndeterminate: false,
        }
    },
    methods: {
        handleCheckAllChange(val) {
            this.checkedList = val ? this.checkboxList.map(item => item.value) : [];
            this.isIndeterminate = false;

            this.$emit('change', this.checkedList)
        },
        handleCheckedCitiesChange(value) {
            let checkedCount = value.length;
            this.checkAll = checkedCount === this.checkboxList.length;
            this.isIndeterminate = checkedCount > 0 && checkedCount < this.checkboxList.length;

            this.$emit('change', this.checkedList)
        }
    }
}
</script>
<style lang="less">
.group-box{
    min-height: 80px;
    max-height: 200px;
    overflow-y: auto;
    .el-checkbox{
        margin-right: 20px;
    }
    .el-checkbox+.el-checkbox{
        margin-left: 0;
    }
}

</style>