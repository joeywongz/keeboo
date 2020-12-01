<template>
  <div>
    <Label class="formItem">
      <span class="name">{{ fieldName }}</span>
      <input type="text"
             :placeholder="placeholder"
             :value = "value"
             @input = "onValueChanged($event.target.value)"/>
    </Label>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component
export default class FormItem extends Vue {
  @Prop({ default: "" }) readonly value!: string;
  @Prop({ required: true }) fieldName!: string;
  @Prop() placeholder?: string;

  onValueChanged(val: string) {
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