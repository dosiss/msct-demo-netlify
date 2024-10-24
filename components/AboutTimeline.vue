<template>
  <div class="timeline-wrap">
    <div class="blocks-columns">
      <div class="column left-column">
        <template v-for="(block, index) in blocks">
          <div v-if="index % 2 === 0" :key="index" class="block" :style="{ backgroundImage: `url(/images/${block.backImage})` }">
            <div class="block-inner">
              <div v-if="block.soonTag === true" class="block-tag-soon">Soon</div>
              <nuxt-img v-if="block.decor" :src="`/images/${block.decor}`" alt="" />
              <div class="block-date">{{ block.month }} {{ block.year }}</div>
              <div class="block-content">
                <img :src="`/images/${block.image}`" alt="" />
                <div class="block-content__text">
                  <h4 class="block-content__text-title">{{ block.title }}</h4>
                  <p>{{ block.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </template>
      </div>
      <div class="column right-column">
        <template v-for="(block, index) in blocks">
          <div v-if="index % 2 !== 0" :key="index" class="block">
            <div class="block-inner">
              <div v-if="block.soonTag === true" class="block-tag-soon">Soon</div>
              <nuxt-img v-if="block.decor" :src="`/images/${block.decor}`" alt="" />
              <div class="block-date">{{ block.month }} {{ block.year }}</div>
              <div class="block-content">
                <img :src="`/images/${block.image}`" alt="" />
                <div class="block-content__text">
                  <h4 class="block-content__text-title">{{ block.title }}</h4>
                  <p>{{ block.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutTimeline',
  props: {
    blocks: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.blocks-container {
  max-width: 1200px;
  margin: 0 auto;
}

.blocks-columns {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.column {
  flex-basis: 50%;
}
.block {
  margin-bottom: 60px;
  position: relative;

  &:before {
    position: absolute;
    content: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUiIGhlaWdodD0iMjUiIHZpZXdCb3g9IjAgMCAyNSAyNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTIuNSIgY3k9IjEyLjUiIHI9IjEyLjUiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcl81Njg1XzIwMTkzKSIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyXzU2ODVfMjAxOTMiIHgxPSIxMi41IiB5MT0iMCIgeDI9IjEyLjUiIHkyPSIyNSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjRkZBNjNFIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0ZGNTE1MSIvPgo8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+Cjwvc3ZnPgo=");
    width: 25px;
    height: 25px;
    top: 0
  }
  .block-tag-soon {
    position: absolute;
    text-transform: uppercase;
    padding: 5px 10px;
    background: red;
    line-height: 1;
    font-weight: 500
  }
}
.block-inner {
  background: #313131;
  padding: 20px 30px 40px 30px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.09);
  font-weight: 700;
  h4 {
    font-size: 1.5rem;
    margin-bottom: 15px
  }
  p {
    font-size: 1.1rem
  }
  .block-content {
    display: flex;
    img {
      width: 115px;
      height: auto;
      margin: 0 20px 0 0
    }
  }
}
.block-date {
  font-size: 1.2rem;
  margin-bottom: 20px
}

.left-column {
  border-right: 7px solid #464646;
  .block {
    margin-right: 30px;
    &:before {
      right: -46px
    }
    .block-tag-soon {
      left: 0;
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px
    }
  }
  .block-inner {
    border-top-right-radius: 0;

    .block-date {
      text-align: right
    }
  }
}
.right-column {
  margin-top: 60px;
  .block {
    margin-left: 30px;
    &:before {
      left: -46px
    }
    .block-tag-soon {
      right: 0;
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px
    }
  }
  .block-inner {
    border-top-left-radius: 0;
    .block-date {
      text-align: left
    }

  }
}


img {
  width: 100%;
  height: auto;
  margin-bottom: 10px;
}

/* mobile styles */
@media only screen and (max-width: 768px) {
  .blocks-columns {
    flex-direction: column;
  }

  .column {
    flex-basis: 100%;
  }

  .block {
    margin-bottom: 20px;
  }
}
</style>
