<template>
  <Layout class-prefix="layout">
    {{record}}
    <number-pad @update:value="onUpdateAmount"/>
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
import {Component} from 'vue-property-decorator';

type Record = {
  tags?: string[];
  notes?: string;
  type?: string;
  amount: number;
}

@Component({
  components: {NumberPad, Types, Notes, Tags}
})
export default class Money extends Vue{
  tags = ['衣', '食', '住', '行', '彩票']
  record: Record = {tags: [], notes: '', type: '-', amount: 0}

  onUpdateAmount(val: string){
    this.record.amount = parseFloat(val);
  }
  onUpdateNotes(val: string) {
    this.record.notes = val
  }
  onUpdateTags(val: string[]) {
    this.record.tags = val
  }
}
</script>

<style lang="scss">
  .layout-content {
    display: flex;
    flex-direction: column-reverse;
  }
</style>
