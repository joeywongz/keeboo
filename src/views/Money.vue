<template>
  <Layout class-prefix="layout">
    {{record}}
    <number-pad :value.sync="record.amount" @submit="saveRecord"/>
    <types :value.sync="record.type" />
    <notes @update:value="onUpdateNotes"/>
    <tags :data-source.sync="tags" @update:value="onUpdateTags"/>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import NumberPad from '@/components/Money/NumberPad.vue';
import Types from '@/components/Money/Types.vue';
import Notes from '@/components/Money/Notes.vue';
import Tags from '@/components/Money/Tags.vue';
import {Component, Watch} from 'vue-property-decorator';
const {model} = require('@/model.js')

console.log(model);

const recordList: Record[] = model.fetch()  //获取数据

type Record = {
  tags?: string[];
  notes?: string;
  type?: string;
  amount: number;
  createdAt?: Date;
}

@Component({
  components: {NumberPad, Types, Notes, Tags}
})
export default class Money extends Vue{
  tags = ['衣', '食', '住', '行', '彩票']
  record: Record = {tags: [], notes: '', type: '+', amount: 0};
  recordList: Record[] = recordList;
  onUpdateNotes(val: string) {
    this.record.notes = val
  }
  onUpdateTags(val: string[]) {
    this.record.tags = val
  }
  saveRecord(){
    const record2: Record = JSON.parse(JSON.stringify(this.record));
    record2.createdAt = new Date();
    this.recordList.push(record2)
    console.log(this.recordList);
  }
  @Watch('recordList')
  onRecordListChange(){
    model.save(this.recordList)
  }
}
</script>

<style lang="scss">
  .layout-content {
    display: flex;
    flex-direction: column-reverse;
  }
</style>
