<script setup>
import './index.scss'

</script>

<template >
<transition name="modal">
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-container">

              <div class="modal-header">
                <slot name="header">
                 
                </slot>
              </div>

              <div class="modal-body">
                <slot name="body">
                
                </slot>
              </div>

              <div class="modal-footer">
                <slot name="footer">
                 
                  <button class="modal-default-button" @click="$emit('close')">
                    OK
                  </button>
                </slot>
              </div>
            </div>
          </div>
        </div>
      </transition>
</template>

<style lang ='scss'></style>