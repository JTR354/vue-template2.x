<template>
  <div v-show="visible" class="img-cut">
    <vue-cropper
      ref="myCropper"
      class="img-big"
      :viewMode="1"
      :guides="false"
      :rotatable="true"
      :background="status"
      :cropBoxResizable="status"
      :aspectRatio="aspect"
      :autoCropArea="1"
      :dragMode="'move'"
      :checkCrossOrigin="false"
      :cropBoxMovable="false"
      :img="img"
    >
    </vue-cropper>
    <div class="img-btn">
      <div class="btn-item" @click="confirm">
        确定
      </div>
      <div class="btn-item" @click="cancel">
        取消
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import VueCropper from 'vue-cropperjs'

  const COMPONENT_NAME = 'CROPPER'

  export default {
    name: COMPONENT_NAME,
    components: {
      VueCropper
    },
    props: {
      aspect: {
        type: Number,
        default: 4 / 3
      }
    },
    data() {
      return {
        visible: false,
        status: false,
        img: '',
        imgType: 'image/jpeg',
        file: null
      }
    },
    methods: {
      show(file) {
        this.visible = true
        let img = this.$handle.getObjectURL(file)
        this.file = file
        this.img = img
        this.imgType = file.type || 'image/jpeg'
        this.$refs.myCropper.replace(img)
      },
      confirm() {
        let src = this.$refs.myCropper.getCroppedCanvas().toDataURL(this.imgType)
        let blob = this.$handle.getBlobBydataURI(src, this.imgType)
        let formData = this.$handle.createFormData(blob, this.imgType)
        this.$emit('confirm', {src, blob, formData, file: blob})
      },
      cancel() {
        this.visible = false
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~@design"

  .img-cut
    position: fixed
    top: 0
    left: 0
    right: 0
    bottom: 0
    z-index: 500
    background: #000
    .img-big
      background: #000
      height: 100%
    .img-btn
      width: 100vw
      position: absolute
      bottom: 0
      height: 60px
      display: flex
      align-items: center
      background: #fff
      border-top: 0.5px solid $color-col-line
      .btn-item
        flex: 1
        text-align: center
        font-size: 16px
        color: #20202E
        &:last-child
          border-left: 0.5px solid $color-col-line
</style>
