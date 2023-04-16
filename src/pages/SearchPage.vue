<template>
  <form action="/">
    <van-search
        v-model="searchText"
        show-action
        placeholder="请输入搜索关键词"
        @search="onSearch"
        @cancel="onCancel"
    />
  </form>
  <van-divider style="color: green">已选标签</van-divider>
  <div v-if="activeIds.length === 0" style="color: red; font-size: small">请选择标签</div>
  <van-row>
    <van-col v-for="tag in activeIds" v-bind:key="tag" span="5">
      <van-tag closeable size="medium" type="primary" @close="close(tag)">
        {{ tag }}
      </van-tag>
    </van-col>
  </van-row>

  <van-divider style="color: #5d71f1">选择标签</van-divider>

  <van-tree-select
      v-model:active-id="activeIds"
      v-model:main-active-index="activeIndex"
      :items="tagList"
  />

  <div style="padding: 12px">
    <van-button block type="primary" @click="doResearchResult()">开始搜索</van-button>
  </div>

</template>

<script setup>
import {ref} from 'vue';
import {Toast} from 'vant';
import {useRouter} from "vue-router";

const originTagList = [
  {
    text: '浙江',
    children: [
      {text: '杭州', id: '杭州'},
      {text: '温州', id: '温州'},
      {text: '宁波', id: '宁波'},
    ],
  },
  {
    text: '湖南',
    children: [
      {text: '长沙', id: '长沙'},
      {text: '衡阳', id: '衡阳'},
      {text: '株洲', id: '株洲'},
    ],
  },
  {
    text: '江苏',
    children: [
      {text: '南京', id: '南京'},
      {text: '无锡', id: '无锡'},
      {text: '徐州', id: '徐州'},
    ],
  },
  {
    text: '河北',
    children: [
      {text: '石家庄', id: '石家庄'},
      {text: '燕山', id: '燕山'},
      {text: '唐山', id: '唐山'},
    ],
  },
];
let tagList = ref(originTagList);
const searchText = ref('');
const activeIds = ref([]);
const activeIndex = ref(0);
// 根据标签过滤-搜索条件
/**
 * 搜索过滤
 * @param val
 */
const onSearch = (val) => {
  tagList.value = originTagList.map(parentTag => {
    const tempChildren = [...parentTag.children];
    const tempParentTag = {...parentTag};
    tempParentTag.children = tempChildren.filter(item => item.text.includes(searchText.value));
    return tempParentTag;
  });
};
const onCancel = () => {
  searchText.value = '';
  tagList.value = originTagList;
};
// 关闭标签，移除标签
const close = (tagParam) => {
  activeIds.value = activeIds.value.filter(item => {
    return item !== tagParam;
  })
};

const router = useRouter()
const doResearchResult = () => {
  router.push({
    path: "/user/list",
    query: {tags: activeIds.value}
  })
}

</script>

<style scoped>

</style>