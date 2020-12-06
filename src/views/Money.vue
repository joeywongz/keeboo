<template>
  <Layout class-prefix="layout">
    <Number-pad :value.sync="record.amount" @submit="saveRecord" />
    <Types :value.sync="record.type" />
    <div class="notes">
      <FormItem
        fieldName="备注"
        placeholder="在这里输入备注"
        @update:value="onUpdateFormItem"
      />
    </div>
    <Tags :data-source.sync="tags" @update:value="onUpdateTags" />
  </Layout>
</template>

<script lang="ts">
import Vue from "vue";
import NumberPad from "@/components/Money/NumberPad.vue";
import Types from "@/components/Money/Types.vue";
import FormItem from "@/components/Money/FormItem.vue";
import Tags from "@/components/Money/Tags.vue";
import { Component } from "vue-property-decorator";

const recordList: RecordItem[] = window.recordList // 获取数据

@Component({
  components: { NumberPad, Types, FormItem, Tags },
})
export default class Money extends Vue {
  // tags = ["衣", "食", "住", "行", "彩票"];
  tags = window.tagList;
  record: RecordItem = { tags: [], formItem: "", type: "+", amount: 0 }; //数据初始值
  recordList: RecordItem[] = recordList;
  onUpdateFormItem(val: string) {
    this.record.formItem = val;
  }
  onUpdateTags(val: string[]) {
    this.record.tags = val;
  }
  saveRecord() {
    window.createRecord(this.record)
  }
}
</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
.notes {
  padding: 12px 0;
}
</style>
