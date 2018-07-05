<template>
<div class="box box-item has-ribbon">
  <div class="ribbon is-small is-warning affiliate-ribbon">Affiliate</div>
  <div class="data">
    <div class="reseller has-ribbon-left">
      <div class="ribbon is-small is-info special-ribbon">US</div>
      <div class="logo">
        <img src="https://img.lenslogistics.com//yourlenses/images/se/logo.png" />
      </div>
    </div>
    <div class="item">
      <div class="productimage">
        <div>
          <a href="/product/1"><img src="../../assets/examplelenses.jpg" /></a>
        </div>
      </div>
      <div class="info">
        <h5>Focus Dailies</h5>
        <div>
          <span class="tag is-success">Free shipping</span>
          <span class="tag is-info">Pack of 30</span>
          <span class="tag is-primary">In stock</span>
        </div>
      </div>
    </div>
    <div class="pricing is-pulled-right">
        <div class="container">
          <span class="total">
            159 kr <i>per box</i>
          </span>
          <span class="perlens">4.82 kr per lens</span>
        </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Item'
}
</script>

<style lang="scss" scoped>
.box-item {
  margin-bottom:10px;

  .affiliate-ribbon {
    top:0px;
    right:0px;
    border-top-right-radius: 5px;
  }

  .data {
    display: flex;
    justify-content: space-between;

    .reseller {
      border-right:1px solid #ccc;
      flex: none;
      width:130px;
      padding-right:10px;

      .special-ribbon {
        top:-20px;
        left:-20px;
        border-top-left-radius: 5px;
      }

      .logo {
        height:100%;

        img {
          max-width:120px;
          position:absolute;
          top:0;
          bottom:0;
          margin:auto;
        }
      }
    }

    .item {
      flex: none;
      display: flex;
      height:50px;
      width:50%;

      .productimage {
        padding-left:10px;
        flex: none;
        height:100%;

        img {
          max-height:50px;
        }
      }

      .info {
        padding-left:20px;
        flex: none;

        h5 {
          font-weight:bold;
        }
      }
    }

    .pricing {
      width:40%;

      div.other {
        background: #000;
        width:20%;
        display:inline-block;

        span {
          float:right;
        }
      }

      .container {
        width:70%;
        float:right;
        height:100%;

        span.total {
          float:right;
          display:inline-block;
          line-height:50px;
          font-size:24px;
          font-weight:bold;

          i {
            font-weight:normal;
            font-size:12px;
          }
        }

        span.perlens {
          line-height:50px;
        }
      }
    }
  }
}
</style>
