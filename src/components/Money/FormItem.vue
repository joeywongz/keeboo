<template>
  <div>
    <Label class="formItem">
      <span class="name">{{ this.fieldName }}</span>
      <input type="text" :placeholder="this.placeholder" v-model="value" />
    </Label>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop, Watch } from "vue-property-decorator";

@Component
export default class FormItem extends Vue {
  value = "";

  @Prop({ required: true }) fieldName!: string;
  @Prop() placeholder?: string;

  @Watch("value")
  onValueChange(val: string) {
    this.$emit("update:value", val);
  }
}
</script>

<style lang="scss" scoped>
.formItem {
  font-size: 14px;
  display: flex;
  padding-left: 16px;
  align-items: center;
  .name {
    padding-right: 16px;
  }
  input {
    height: 40px;
    flex-grow: 1;
    background: transparent;
    border: none;
    padding-right: 16px;
  }
}
</style>