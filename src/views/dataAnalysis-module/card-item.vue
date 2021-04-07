<template>
    <div>
        <div v-for="item in data" :key="item.text" class="text item">
            <el-avatar shape="square" size="large" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
            <span class="class-span">{{item.typeName}}</span><strong style="color: #ff0000;margin: 0 15px 0 8px;font-size: 18px;">{{item.total}}</strong>
            <span v-if="item.typeName == '教职工总数'">人</span>
            <span v-else-if="item.typeName == '经费收入' || item.typeName == '经费支出'">万</span>
            <span v-else-if="item.typeName == '校企合作'">个</span>
            <span v-else>间</span>
        </div>
    </div>
</template>
<script>
export default {
    name: 'cardItem',
    props: {
        data: {
            type: Array,
            default: () => []
        }
    }
}
</script>
