<template>
  <div class="timeline-wrap">
    <div v-if="$device.isMobile" class="blocks-columns-mobile">
      <template v-for="(block, index) in blocks">
        <div :key="index" class="block">
          <div class="block-inner" :style="{ backgroundImage: `url(/images/${block.backImage})` }">
            <div v-if="block.soonTag === true" class="block-tag-soon">Soon</div>
            <div class="block-date">{{ block.month }} {{ block.year }}</div>
            <div class="block-content">
              <img :src="`/images/${block.image}`" alt="" />
              <div class="block-content__text">
                <h4 class="block-content__text-title">{{ block.title }}</h4>
                <div class="block-content__text-content" v-html="block.description"></div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </div>
    <div v-else class="blocks-columns">
      <div class="column left-column">
        <template v-for="(block, index) in blocks">
          <div v-if="index % 2 === 0" :key="index" class="block">
            <div class="block-inner" :style="{ backgroundImage: `url(/images/${block.backImage})` }">
              <div v-if="block.soonTag === true" class="block-tag-soon">Soon</div>
              <nuxt-img v-if="block.decorImage" :src="`/images/${block.decorImage}`" class="block-decor" :style="{top: `${block.posTop}`, bottom: `${block.posBottom}`, right:`${block.posRight}`, left: `${block.posLeft}`}" alt="" />
              <div class="block-date">{{ block.month }} {{ block.year }}</div>
              <div class="block-content">
                <img :src="`/images/${block.image}`" alt="" />
                <div class="block-content__text">
                  <h4 class="block-content__text-title">{{ block.title }}</h4>
                  <div class="block-content__text-content" v-html="block.description"></div>
                </div>
              </div>
            </div>
          </div>
        </template>
      </div>
      <div class="column right-column">
        <template v-for="(block, index) in blocks">
          <div v-if="index % 2 !== 0" :key="index" class="block">
            <div class="block-inner" :style="{ backgroundImage: `url(/images/${block.backImage})` }">
              <div v-if="block.soonTag === true" class="block-tag-soon">Soon</div>
              <nuxt-img v-if="block.decorImage" :src="`/images/${block.decorImage}`" class="block-decor" :style="{top: `${block.posTop}`, bottom: `${block.posBottom}`, right:`${block.posRight}`, left: `${block.posLeft}`}" alt="" />
              <div class="block-date">{{ block.month }} {{ block.year }}</div>
              <div class="block-content">
                <img :src="`/images/${block.image}`" alt="" />
                <div class="block-content__text">
                  <h4 class="block-content__text-title">{{ block.title }}</h4>
                  <div class="block-content__text-content" v-html="block.description"></div>
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

<style lang="scss">
.timeline-wrap {
  margin-top: 60px
}
.blocks-container {
  max-width: 1200px;
  margin: 0 auto;
}

.blocks-columns {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  position: relative;
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
  background-size: 120%;
  background-position: center;
  background-repeat: no-repeat;
  padding: 20px 30px 40px 30px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.09);
  font-weight: 700;
  position: relative;
  @media (max-width: 850px){
    background-size: cover;
    padding: 15px 15px 20px 15px
  }
  @media (max-width: 650px){
    background-size: 140%;
    padding: 15px 15px 20px 15px
  }
  h4 {
    font-size: 1.5rem;
    margin-bottom: 15px;
    @media (max-width: 1200px){
      font-size: 1rem
    }
  }
  p {
    font-size: 1.1rem;
    font-weight: 500;
    @media (max-width: 1200px){
      font-size: .85rem
    }
  }
  .block-decor {
    position: absolute;
    max-width: 100px;
    height: auto;
    z-index: 0
  }
  .block-content {
    display: flex;
    img {
      width: 115px;
      height: 115px;
      margin: 0 20px 0 0;
      position: relative;
      @media (max-width: 1200px){
        width: 72px;
        height: 72px
      }
    }
    ul {
    list-style: disc;
    margin-top: 10px;
    padding-left: 15px;
    }
    a {
      text-decoration: underline;
    }
    .block-content__text-content {
      font-weight: 500
    }
  }
}
.block-date {
  font-size: 1.2rem;
  margin-bottom: 20px;
  @media (max-width: 1200px){
    font-size: 1rem
  }
}

.left-column {
  border-right: 7px solid #464646;
  position: relative;
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
    .block-decor {
      bottom: -19px;
      left: -10px
    }
  }
  &:before {
    position: absolute;
    content: '';
    bottom: 0;
    right: -10px;
    height: 270px;
    width:  20px;
    background: #000
  }
}
.right-column {
  margin-top: 220px;
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
    .block-decor {
      bottom: -25px;
      right: -12px
    }
  }
}


// img {
//   width: 100%;
//   height: auto;
//   margin-bottom: 10px;
// }

.blocks-columns-mobile {
  .block {
    margin-bottom: 30px;
    &:nth-child(even) {
      .block-tag-soon {
        left: 0
      }
      .block-date {
        text-align: right
      }
    }
    &:nth-child(odd) {
      .block-tag-soon {
        right: 0
      }
      .block-date {
        text-align: left
      }
    }
    &:before {
      content: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHZpZXdCb3g9IjAgMCAxMCAxMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iNSIgY3k9IjUiIHI9IjUiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcl81NzYwXzE4MTA3KSIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyXzU3NjBfMTgxMDciIHgxPSI1IiB5MT0iMCIgeDI9IjUiIHkyPSIxMCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjRkZBNjNFIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0ZGNTE1MSIvPgo8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+Cjwvc3ZnPgo=');
      width: 10px;
      height: 10px;
      bottom: -15px;
      top: unset;
      left: calc(50% - 5px)
    }
    &:last-child {
      &:before {
        content: ''
      }


    }
  }
}

@media only screen and (max-width: 650px) {
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
