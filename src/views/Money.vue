<template>
  <Layout class-prefix="layout">
    <Number-pad :value.sync="record.amount" @submit="saveRecord"/>
    <Types :value.sync="record.type" />
    <FormItem fieldName="备注" placeholder="在这里输入备注" @update:value="onUpdateFormItem"/>
    <Tags :data-source.sync="tags" @update:value="onUpdateTags"/>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import NumberPad from '@/components/Money/NumberPad.vue';
import Types from '@/components/Money/Types.vue';
import FormItem from '@/components/Money/FormItem.vue';
import Tags from '@/components/Money/Tags.vue';
import {Component, Watch} from 'vue-property-decorator';
import recordListModel from '@/models/recordListModel';
import tagListModel from '@/models/tagListModel'

const recordList = recordListModel.fetch()  //获取数据
const tags = tagListModel.fetch()

@Component({
  components: {NumberPad, Types, FormItem, Tags}
})
export default class Money extends Vue{
  tags = ['衣', '食', '住', '行', '彩票']
  record: RecordIterm = {tags: [], formItem: '', type: '+', amount: 0};  //数据初始值
  recordList: RecordIterm[] = recordList;
  onUpdateFormItem(val: string) {
    this.record.formItem = val
  }
  onUpdateTags(val: string[]) {
    this.record.tags = val
  }
  saveRecord(){
    const record2: RecordIterm = recordListModel.clone(this.record)
    record2.createdAt = new Date();
    this.recordList.push(record2)
  }
  @Watch('recordList')
  onRecordListChange(){
    recordListModel.save(this.recordList)
  }
}
</script>

<style lang="scss">
  .layout-content {
    display: flex;
    flex-direction: column-reverse;
  }
</style>
