<template>
  <div class="relative mx-auto w-1/4">
    <div class="">
      <input v-model="query" type="search" class="bg-grey-lighter shadow-md rounded-lg border-0 focus:outline-color-pink p-4 w-full" :placeholder="$t('homepage.search_placeholder')" @keyup.delete="handleDelete($event)" @keydown.down.prevent="handleKeyDown($event)" @keydown.up.prevent="handleKeyUp" @keyup.enter.prevent.submit="emitSelect(matches[preselected])">
        <div class="absolute pin-r pin-t mt-3 mr-3 text-grey-lighter">
          <svg class="h-6 text-dark" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.625 0C0.28 0 0 0.28 0 0.625C0 0.97 0.28 1.25 0.625 1.25C0.97 1.25 1.25 0.97 1.25 0.625C1.25 0.28 0.97 0 0.625 0Z" transform="translate(18.75 11.875)" fill="#F66D9B"/>
          <path d="M31.2676 27.7324L22.9251 19.3899C24.2841 17.3428 25 14.9722 25 12.5C25 5.6075 19.3925 0 12.5 0C5.6075 0 0 5.6075 0 12.5C0 19.3925 5.6075 25 12.5 25C14.9722 25 17.3429 24.2841 19.3899 22.9251L21.6959 25.2311C21.6962 25.2314 21.6965 25.2317 21.6969 25.2321L27.7324 31.2676C28.2047 31.7399 28.8324 32 29.5 32C30.1676 32 30.7953 31.7399 31.2674 31.2677C31.7398 30.7957 32 30.1679 32 29.5C32 28.8321 31.7398 28.2043 31.2676 27.7324ZM19.096 21.6079C19.096 21.608 19.0959 21.608 19.0959 21.6081C17.1667 23.0093 14.8859 23.75 12.5 23.75C6.29675 23.75 1.25 18.7032 1.25 12.5C1.25 6.29675 6.29675 1.25 12.5 1.25C18.7032 1.25 23.75 6.29675 23.75 12.5C23.75 14.8859 23.0093 17.1667 21.608 19.0959C20.9069 20.0618 20.0618 20.9069 19.096 21.6079ZM20.4072 22.1746C21.0541 21.6454 21.6454 21.0541 22.1746 20.4072L23.9478 22.1804C23.4085 22.8169 22.8169 23.4086 22.1804 23.9478L20.4072 22.1746ZM30.3837 30.3837C30.1474 30.6199 29.8336 30.75 29.5 30.75C29.1664 30.75 28.8526 30.6199 28.6163 30.3837L23.0666 24.834C23.6996 24.2908 24.2908 23.6996 24.8339 23.0667L30.3838 28.6166C30.6199 28.8524 30.75 29.1661 30.75 29.5C30.75 29.8339 30.6199 30.1476 30.3837 30.3837Z" fill="#F66D9B"/>
          <path d="M10 0C4.48594 0 0 4.48594 0 10C0 15.5141 4.48594 20 10 20C15.5141 20 20 15.5141 20 10C20 4.48594 15.5141 0 10 0ZM10 18.75C5.17525 18.75 1.25 14.8247 1.25 10C1.25 5.17525 5.17525 1.25 10 1.25C14.8247 1.25 18.75 5.17525 18.75 10C18.75 14.8247 14.8247 18.75 10 18.75Z" transform="translate(2.5 2.5)" fill="#F66D9B"/>
          <path d="M7.62906 4.81706C7.09088 3.41631 6.15381 2.21869 4.91906 1.35375C3.65494 0.468125 2.17006 0 0.625 0C0.279875 0 0 0.279875 0 0.625C0 0.970125 0.279875 1.25 0.625 1.25C3.19369 1.25 5.53944 2.86362 6.46225 5.26544C6.55775 5.51394 6.79456 5.66644 7.04581 5.66644C7.12031 5.66644 7.19612 5.653 7.26981 5.62469C7.592 5.50087 7.75288 5.13931 7.62906 4.81706Z" transform="translate(11.875 5)" fill="#F66D9B"/>
        </svg>
      </div>
    </div>
    <div :class="['vbta-menu', { visible: matches.length && !selected }]">
        <ul class="list-reset">
            <li v-for="match in matches" v-bind:key="match.id" class="vbta-suggestion" @click="emitSelect(match)">
            <span v-html="match.name"></span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import debounce from 'lodash.debounce'

export default {
  name: 'typeahead',
  props: {
    source: {
      type: Array,
      default: () => { return [] },
      required: true
    },
    onSelect: {
      type: Function,
      required: true
    },
    onChange: {
      type: Function,
      required: true
    },
    limit: {
      type: Number,
      default: 5,
      required: false
    },
    name: {
      type: String,
      required: false
    },
    async: {
      type: Boolean,
      default: true,
      required: false
    },
    placeholder: {
      type: String,
      default () { return '' },
      required: false
    }
  },
  data () {
    return {
      query: '',
      matches: [],
      hint: '',
      selected: false,
      firstTouch: true,
      preselected: 0
    }
  },
  watch: {
    query: function (value) {
      if (this.async) {
        debounce(this.getMatches, 150)(value)
      } else {
        this.getMatches(value)
      }
      this.onChange(value, this.name)
    }
  },
  methods: {
    handleDelete () {
      this.selected = false
      this.preselected = 0
      this.firstTouch = true
    },
    handleKeyUp () {
      if (this.matches && this.preselected !== 0) {
        this.preselected--
        let el = document.getElementsByClassName('vbta-suggestion')[this.preselected]
        el.style['background-color'] = '#f66d9b'

        let prev = document.getElementsByClassName('vbta-suggestion')[this.preselected + 1]
        prev.style['background-color'] = '#f1f5f8'
      }
    },
    handleKeyDown () {
      if (this.matches && this.preselected !== this.matches.length - 1) {
        if (!this.firstTouch) {
          this.preselected++
        } else {
          this.firstTouch = false
        }
        let el = document.getElementsByClassName('vbta-suggestion')[this.preselected]
        el.style['background-color'] = '#f66d9b'

        if (this.preselected !== 0) {
          let prev = document.getElementsByClassName('vbta-suggestion')[this.preselected - 1]
          prev.style['background-color'] = '#f1f5f8'
        }
      }
    },
    emitSelect (value) {
      // value = value.replace(/<[\/]?strong>/gm, '')
      this.selected = true
      this.query = value
      this.onSelect(value, this.name)
    },
    getMatches (query) {
      if (query) {
        let matches = []
        let regex = new RegExp(query, 'i')
        let isMatch = false
        this.source.forEach(value => {
          // if (typeof value !== 'string') new TypeError(`Typeahead sources must be string. Received ${typeof value}.`)
          if (matches.length === this.limit) return

          let regexProps = regex.exec(value.name)
          if (regexProps) {
            isMatch = true

            let substr1 = value.name.substring(0, regexProps.index)
            let substr2 = `<strong>${value.name.slice(regexProps.index, regexProps.index + query.length)}</strong>`
            let substr3 = value.name.substring(regexProps.index + query.length)

            let match = {id: value.id, name: (substr1 + substr2 + substr3)}

            matches.push(match)

            if (regexProps.index === 0) {
              let hint = matches[0].name.replace(/<[\/]?strong>/gm, '').substring(query.length)
              if (hint !== this.hint) this.hint = query + hint
            }
          }
          if (!isMatch) {
            this.hint = ''
          }
        })
        this.matches = matches
      } else {
        this.hint = ''
        this.matches = []
      }

      console.log(this.matches)
    }
  }
}
</script>

<style lang="scss" scoped>
.vbta {
  width: 100%;
  position: relative;
  display: inline-block;
}

.vbta-menu.visible {
  display: inline-block;
}

.vbta-menu {
  position: absolute;
  width: 100%;
  top: 85%;
  left: 0;
  z-index: 1000;
  display: none;
  float: left;
  min-width: 160px;
  padding: 5px 0;
  margin: 2px 0 0;
  list-style: none;
  font-size: 14px;
  text-align: left;
  background-color: #f1f5f8;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  -webkit-box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
  background-clip: padding-box;
}

.vbta-suggestion {
  display: block;
  padding: 3px 10px;
  clear: both;
  font-weight: normal;
  line-height: 1.42857143;
  white-space: nowrap;
}

.vbta-suggestion:hover,
.vbta-suggestion:focus {
  color: #ffffff;
  text-decoration: none;
  outline: 0;
  background-color: #f66d9b;
  cursor: pointer;
}

.vbta-hint {
  color: #999;
  position: absolute;
  top: 0px;
  left: 0px;
  border-color: transparent;
  box-shadow: none;
  opacity: 1;
  background: none 0% 0% / auto repeat scroll padding-box border-box rgb(255, 255, 255);
}
</style>
