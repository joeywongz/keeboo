<template>
  <Layout>
    <div class="navBar">
      <Icon name="left" class="leftIcon" @click="goback"/>
      <span class="title">编辑label</span>
      <span class="rightIcon"></span>
    </div>
    <div class="form-wrapper">
      <FormItem
        fieldName="标签名"
        placeholder="请输入标签名"
        :value="tag.name"
        @update:value="updateTag"
      />
    </div>
    <div class="button-wrapper">
      <Button @click="removeTag()">删除标签</Button>
    </div>
  </Layout>
</template>

<script lang="ts">
import Vue from "vue";
import FormItem from "@/components/Money/FormItem.vue";
import { Component } from "vue-property-decorator";

@Component({
  components: { FormItem },
})
export default class EditLabels extends Vue {
  tag?: Tag = window.findTag(this.$route.params.id);
  created() {
    if (!this.tag) {
      this.$router.replace("/404"); //tag不存在则跳转404页面
    }
  }
  updateTag(name: string) {
    if (this.tag) {
      window.updateTag(this.tag.id, name);
    }
  }
  removeTag() {
    if (this.tag) {
      if(window.removeTag(this.tag.id)) {
        window.alert("删除成功")
        this.goback()
      } else {
        window.alert("删除失败")
      }
    }
  }
  goback() {
    this.$router.back()
  }
}
</script>

<style lang="scss" scoped>
.navBar {
  text-align: center;
  font-size: 16px;
  padding: 12px 16px;
  background: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  > .leftIcon {
    width: 24px;
    height: 24px;
  }
  > .rightIcon {
    width: 24px;
    height: 24px;
  }
}
.form-wrapper {
  background: white;
  margin-top: 8px;
}
.button-wrapper {
  text-align: center;
  padding: 16px;
  margin-top: 44-16px;
}
</style>