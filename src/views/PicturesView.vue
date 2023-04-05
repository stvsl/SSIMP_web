<template>
  <div class="all">
    <div class="tuji">
      <img src="../assets/photo/北镇闾山.jpg">
    </div>
    <div class="buju">
      <div class="one">
        <div class="flex">
          <div class="first">
            <div class="articlelist">
              <aside>
                <div>
                  <h1>正门</h1>
                  <!-- <h2>Article <span class="pink">List</span></h2> -->
                </div>
                <br />
              </aside>
            </div>
          </div>
        </div>
      </div>
      <div class="two">
        <PicturesFalls :images="zhengmen"></PicturesFalls>
      </div>
    </div>
    <div class="buju">
      <div class="one">
        <div class="flex">
          <div class="first">
            <div class="articlelist">
              <aside>
                <div>
                  <h1>白云阁</h1>
                  <!-- <h2>Article <span class="pink">List</span></h2> -->
                </div>
                <br />
              </aside>
            </div>
          </div>
        </div>
      </div>
      <div class="two">
        <PicturesFalls :images="baiyunge"></PicturesFalls>
      </div>
    </div>
    <div class="buju">
      <div class="one">
        <div class="flex">
          <div class="first">
            <div class="articlelist">
              <aside>
                <div>
                  <h1>比镇名山</h1>
                  <!-- <h2>Article <span class="pink">List</span></h2> -->
                </div>
                <br />
              </aside>
            </div>
          </div>
        </div>
      </div>
      <div class="two">
        <PicturesFalls :images="bizhenmingshan"></PicturesFalls>
      </div>
    </div>
    <div class="buju">
      <div class="one">
        <div class="flex">
          <div class="first">
            <div class="articlelist">
              <aside>
                <div>
                  <h1>玻璃栈道</h1>
                  <!-- <h2>Article <span class="pink">List</span></h2> -->
                </div>
                <br />
              </aside>
            </div>
          </div>
        </div>
      </div>
      <div class="two">
        <PicturesFalls :images="bolizhandao"></PicturesFalls>
      </div>
    </div>
    <div class="buju">
      <div class="one">
        <div class="flex">
          <div class="first">
            <div class="articlelist">
              <aside>
                <div>
                  <h1>财神殿</h1>
                  <!-- <h2>Article <span class="pink">List</span></h2> -->
                </div>
                <br />
              </aside>
            </div>
          </div>
        </div>
      </div>
      <div class="two">
        <PicturesFalls :images="caishendian"></PicturesFalls>
      </div>
    </div>
    <div class="buju">
      <div class="one">
        <div class="flex">
          <div class="first">
            <div class="articlelist">
              <aside>
                <div>
                  <h1>从善如登石</h1>
                  <!-- <h2>Article <span class="pink">List</span></h2> -->
                </div>
                <br />
              </aside>
            </div>
          </div>
        </div>
      </div>
      <div class="two">
        <PicturesFalls :images="congshanrudengshi"></PicturesFalls>
      </div>
    </div>
    <div class="buju">
      <div class="one">
        <div class="flex">
          <div class="first">
            <div class="articlelist">
              <aside>
                <div>
                  <h1>功德碑</h1>
                  <!-- <h2>Article <span class="pink">List</span></h2> -->
                </div>
                <br />
              </aside>
            </div>
          </div>
        </div>
      </div>
      <div class="two">
        <PicturesFalls :images="gongdebei"></PicturesFalls>
      </div>
    </div>
    <div class="buju">
      <div class="one">
        <div class="flex">
          <div class="first">
            <div class="articlelist">
              <aside>
                <div>
                  <h1>古佛龛</h1>
                  <!-- <h2>Article <span class="pink">List</span></h2> -->
                </div>
                <br />
              </aside>
            </div>
          </div>
        </div>
      </div>
      <div class="two">
        <PicturesFalls :images="gufokan"></PicturesFalls>
      </div>
    </div>
    <div class="buju">
      <div class="one">
        <div class="flex">
          <div class="first">
            <div class="articlelist">
              <aside>
                <div>
                  <h1>观艺亭与习武亭</h1>
                  <!-- <h2>Article <span class="pink">List</span></h2> -->
                </div>
                <br />
              </aside>
            </div>
          </div>
        </div>
      </div>
      <div class="two">
        <PicturesFalls :images="guanyiting"></PicturesFalls>
      </div>
    </div>
    <div class="buju">
      <div class="one">
        <div class="flex">
          <div class="first">
            <div class="articlelist">
              <aside>
                <div>
                  <h1>观音阁</h1>
                  <!-- <h2>Article <span class="pink">List</span></h2> -->
                </div>
                <br />
              </aside>
            </div>
          </div>
        </div>
      </div>
      <div class="two">
        <PicturesFalls :images="guanyinge"></PicturesFalls>
      </div>
    </div>
    <div class="buju">
      <div class="one">
        <div class="flex">
          <div class="first">
            <div class="articlelist">
              <aside>
                <div>
                  <h1>老爷阁</h1>
                  <!-- <h2>Article <span class="pink">List</span></h2> -->
                </div>
                <br />
              </aside>
            </div>
          </div>
        </div>
      </div>
      <div class="two">
        <PicturesFalls :images="laoyege"></PicturesFalls>
      </div>
    </div>
    <div class="buju">
      <div class="one">
        <div class="flex">
          <div class="first">
            <div class="articlelist">
              <aside>
                <div>
                  <h1>龙王殿</h1>
                  <!-- <h2>Article <span class="pink">List</span></h2> -->
                </div>
                <br />
              </aside>
            </div>
          </div>
        </div>
      </div>
      <div class="two">
        <PicturesFalls :images="longwangdian"></PicturesFalls>
      </div>
    </div>
    <div class="buju">
      <div class="one">
        <div class="flex">
          <div class="first">
            <div class="articlelist">
              <aside>
                <div>
                  <h1>木栈道</h1>
                  <!-- <h2>Article <span class="pink">List</span></h2> -->
                </div>
                <br />
              </aside>
            </div>
          </div>
        </div>
      </div>
      <div class="two">
        <PicturesFalls :images="muzhandao"></PicturesFalls>
      </div>
    </div>
    <div class="buju">
      <div class="one">
        <div class="flex">
          <div class="first">
            <div class="articlelist">
              <aside>
                <div>
                  <h1>菩萨殿</h1>
                  <!-- <h2>Article <span class="pink">List</span></h2> -->
                </div>
                <br />
              </aside>
            </div>
          </div>
        </div>
      </div>
      <div class="two">
        <PicturesFalls :images="pusadian"></PicturesFalls>
      </div>
    </div>
    <div class="buju">
      <div class="one">
        <div class="flex">
          <div class="first">
            <div class="articlelist">
              <aside>
                <div>
                  <h1>祈福路</h1>
                  <!-- <h2>Article <span class="pink">List</span></h2> -->
                </div>
                <br />
              </aside>
            </div>
          </div>
        </div>
      </div>
      <div class="two">
        <PicturesFalls :images="qifulu"></PicturesFalls>
      </div>
    </div>
    <div class="buju">
      <div class="one">
        <div class="flex">
          <div class="first">
            <div class="articlelist">
              <aside>
                <div>
                  <h1>三霄娘娘殿</h1>
                  <!-- <h2>Article <span class="pink">List</span></h2> -->
                </div>
                <br />
              </aside>
            </div>
          </div>
        </div>
      </div>
      <div class="two">
        <PicturesFalls :images="sanxiaoniangniang"></PicturesFalls>
      </div>
    </div>
    <div class="buju">
      <div class="one">
        <div class="flex">
          <div class="first">
            <div class="articlelist">
              <aside>
                <div>
                  <h1>石屏代</h1>
                  <!-- <h2>Article <span class="pink">List</span></h2> -->
                </div>
                <br />
              </aside>
            </div>
          </div>
        </div>
      </div>
      <div class="two">
        <PicturesFalls :images="shipingdai"></PicturesFalls>
      </div>
    </div>
    <div class="buju">
      <div class="one">
        <div class="flex">
          <div class="first">
            <div class="articlelist">
              <aside>
                <div>
                  <h1>索道</h1>
                  <!-- <h2>Article <span class="pink">List</span></h2> -->
                </div>
                <br />
              </aside>
            </div>
          </div>
        </div>
      </div>
      <div class="two">
        <PicturesFalls :images="suodao"></PicturesFalls>
      </div>
    </div>
    <div class="buju">
      <div class="one">
        <div class="flex">
          <div class="first">
            <div class="articlelist">
              <aside>
                <div>
                  <h1>桃花洞</h1>
                  <!-- <h2>Article <span class="pink">List</span></h2> -->
                </div>
                <br />
              </aside>
            </div>
          </div>
        </div>
      </div>
      <div class="two">
        <PicturesFalls :images="taohuadong"></PicturesFalls>
      </div>
    </div>
    <div class="buju">
      <div class="one">
        <div class="flex">
          <div class="first">
            <div class="articlelist">
              <aside>
                <div>
                  <h1>万佛殿</h1>
                  <!-- <h2>Article <span class="pink">List</span></h2> -->
                </div>
                <br />
              </aside>
            </div>
          </div>
        </div>
      </div>
      <div class="two">
        <PicturesFalls :images="wanfodian"></PicturesFalls>
      </div>
    </div>
    <div class="buju">
      <div class="one">
        <div class="flex">
          <div class="first">
            <div class="articlelist">
              <aside>
                <div>
                  <h1>万年松</h1>
                  <!-- <h2>Article <span class="pink">List</span></h2> -->
                </div>
                <br />
              </aside>
            </div>
          </div>
        </div>
      </div>
      <div class="two">
        <PicturesFalls :images="wanniansong"></PicturesFalls>
      </div>
    </div>
    <div class="buju">
      <div class="one">
        <div class="flex">
          <div class="first">
            <div class="articlelist">
              <aside>
                <div>
                  <h1>忘海寺</h1>
                  <!-- <h2>Article <span class="pink">List</span></h2> -->
                </div>
                <br />
              </aside>
            </div>
          </div>
        </div>
      </div>
      <div class="two">
        <PicturesFalls :images="wanghaisi"></PicturesFalls>
      </div>
    </div>
    <div class="buju">
      <div class="one">
        <div class="flex">
          <div class="first">
            <div class="articlelist">
              <aside>
                <div>
                  <h1>耶律楚读书堂</h1>
                  <!-- <h2>Article <span class="pink">List</span></h2> -->
                </div>
                <br />
              </aside>
            </div>
          </div>
        </div>
      </div>
      <div class="two">
        <PicturesFalls :images="yelvchu"></PicturesFalls>
      </div>
    </div>
    <div class="buju">
      <div class="one">
        <div class="flex">
          <div class="first">
            <div class="articlelist">
              <aside>
                <div>
                  <h1>游目天表</h1>
                  <!-- <h2>Article <span class="pink">List</span></h2> -->
                </div>
                <br />
              </aside>
            </div>
          </div>
        </div>
      </div>
      <div class="two">
        <PicturesFalls :images="youmu"></PicturesFalls>
      </div>
    </div>
    <div class="buju">
      <div class="one">
        <div class="flex">
          <div class="first">
            <div class="articlelist">
              <aside>
                <div>
                  <h1>圆通殿</h1>
                  <!-- <h2>Article <span class="pink">List</span></h2> -->
                </div>
                <br />
              </aside>
            </div>
          </div>
        </div>
      </div>
      <div class="two">
        <PicturesFalls :images="yuantongdian"></PicturesFalls>
      </div>
    </div>
    <div class="buju">
      <div class="one">
        <div class="flex">
          <div class="first">
            <div class="articlelist">
              <aside>
                <div>
                  <h1>祖峰</h1>
                  <!-- <h2>Article <span class="pink">List</span></h2> -->
                </div>
                <br />
              </aside>
            </div>
          </div>
        </div>
      </div>
      <div class="two">
        <PicturesFalls :images="zufeng"></PicturesFalls>
      </div>
    </div>
  </div>
</template>

<script >
import PicturesFalls from "@/components/PicturesFalls";
import { ref } from "vue";


export default {
  name: "PicturesView",
  created() { },
  data() {
    return {};
  },
  props: {},
  methods: {},
  setup() {
    const zhengmen = ref(['http://cdn.ssimp.stvsljl.com/staticimg%2F%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20230405150742.jpg']);
    const baiyunge = ref(['http://cdn.ssimp.stvsljl.com/staticimg/%E7%99%BD%E4%BA%91%E9%98%811.jpg',
      'http://cdn.ssimp.stvsljl.com/staticimg/%E7%99%BD%E4%BA%91%E9%98%812.jpg',
      'http://cdn.ssimp.stvsljl.com/staticimg/%E7%99%BD%E4%BA%91%E9%98%813.jpg',
      'http://cdn.ssimp.stvsljl.com/staticimg/%E7%99%BD%E4%BA%91%E9%98%814.jpg',
      'http://cdn.ssimp.stvsljl.com/staticimg/%E7%99%BD%E4%BA%91%E9%98%815.jpg']);
    const bizhenmingshan = ref(['http://cdn.ssimp.stvsljl.com/staticimg/%E6%AF%94%E9%95%87%E5%B1%B11.jpg']);
    const bolizhandao = ref(['http://cdn.ssimp.stvsljl.com/staticimg/%E7%8E%BB%E7%92%83%E6%A0%88%E9%81%931.jpg',
      'http://cdn.ssimp.stvsljl.com/staticimg%2F%E7%8E%BB%E7%92%83%E6%A0%88%E9%81%932.jpg',
      'http://cdn.ssimp.stvsljl.com/staticimg%2F%E7%8E%BB%E7%92%83%E6%A0%88%E9%81%933.jpg',
      'http://cdn.ssimp.stvsljl.com/staticimg%2F%E7%8E%BB%E7%92%83%E6%A0%88%E9%81%934.jpg',
      'http://cdn.ssimp.stvsljl.com/staticimg%2F%E7%8E%BB%E7%92%83%E6%A0%88%E9%81%936.jpg',
      'http://cdn.ssimp.stvsljl.com/staticimg%2F%E7%8E%BB%E7%92%83%E6%A0%88%E9%81%937.jpg',
      'http://cdn.ssimp.stvsljl.com/staticimg%2F%E7%8E%BB%E7%92%83%E6%A0%88%E9%81%938.jpg',
      'http://cdn.ssimp.stvsljl.com/staticimg%2F%E7%8E%BB%E7%92%83%E6%A0%88%E9%81%938.jpg']);
    const caishendian = ref(['http://cdn.ssimp.stvsljl.com/staticimg%2F%E8%B4%A2%E7%A5%9E%E6%AE%BF1.jpg',
      'http://cdn.ssimp.stvsljl.com/staticimg%2F%E8%B4%A2%E7%A5%9E%E6%AE%BF2.jpg',
      'http://cdn.ssimp.stvsljl.com/staticimg%2F%E8%B4%A2%E7%A5%9E%E6%AE%BF3.jpg',
      'http://cdn.ssimp.stvsljl.com/staticimg%2F%E8%B4%A2%E7%A5%9E%E6%AE%BF4.jpg',]);
    const congshanrudengshi = ref(['http://cdn.ssimp.stvsljl.com/staticimg%2F%E4%BB%8E%E5%96%841.jpg',
      'http://cdn.ssimp.stvsljl.com/staticimg%2F%E4%BB%8E%E5%96%842.jpg',
      'http://cdn.ssimp.stvsljl.com/staticimg%2F%E4%BB%8E%E5%96%843.jpg',
      'http://cdn.ssimp.stvsljl.com/staticimg%2F%E4%BB%8E%E5%96%844.jpg']);
    const gongdebei = ref(['http://cdn.ssimp.stvsljl.com/staticimg%2F%E5%8A%9F%E5%BE%B7%E7%A2%911.jpg',
      'http://cdn.ssimp.stvsljl.com/staticimg%2F%E5%8A%9F%E5%BE%B7%E7%A2%912.jpg']);
    const gufokan = ref(['http://cdn.ssimp.stvsljl.com/staticimg%2F%E5%8F%A4%E4%BD%9B%E9%BE%9B1.jpg',
      'http://cdn.ssimp.stvsljl.com/staticimg%2F%E5%8F%A4%E4%BD%9B%E9%BE%9B10.jpg',
      'http://cdn.ssimp.stvsljl.com/staticimg%2F%E5%8F%A4%E4%BD%9B%E9%BE%9B11.jpg',
      'http://cdn.ssimp.stvsljl.com/staticimg%2F%E5%8F%A4%E4%BD%9B%E9%BE%9B12.jpg',
      'http://cdn.ssimp.stvsljl.com/staticimg%2F%E5%8F%A4%E4%BD%9B%E9%BE%9B13.jpg',
      'http://cdn.ssimp.stvsljl.com/staticimg%2F%E5%8F%A4%E4%BD%9B%E9%BE%9B3.jpg',
      'http://cdn.ssimp.stvsljl.com/staticimg%2F%E5%8F%A4%E4%BD%9B%E9%BE%9B4.jpg',
      'http://cdn.ssimp.stvsljl.com/staticimg%2F%E5%8F%A4%E4%BD%9B%E9%BE%9B5.jpg',
      'http://cdn.ssimp.stvsljl.com/staticimg%2F%E5%8F%A4%E4%BD%9B%E9%BE%9B6.jpg',
      'http://cdn.ssimp.stvsljl.com/staticimg%2F%E5%8F%A4%E4%BD%9B%E9%BE%9B7.jpg',
      'http://cdn.ssimp.stvsljl.com/staticimg%2F%E5%8F%A4%E4%BD%9B%E9%BE%9B8.jpg',
      'http://cdn.ssimp.stvsljl.com/staticimg%2F%E5%8F%A4%E4%BD%9B%E9%BE%9B9.jpg']);
    const guanyiting = ref(['http://cdn.ssimp.stvsljl.com/staticimg%2F%E8%A7%82%E8%89%BA%E4%BA%AD.jpg']);
    const guanyinge = ref(['http://cdn.ssimp.stvsljl.com/staticimg%2F%E8%A7%82%E9%9F%B3%E9%98%811.jpg',
      'http://cdn.ssimp.stvsljl.com/staticimg%2F%E8%A7%82%E9%9F%B3%E9%98%8111.jpg',
      'http://cdn.ssimp.stvsljl.com/staticimg%2F%E8%A7%82%E9%9F%B3%E9%98%8111.jpg',
      'http://cdn.ssimp.stvsljl.com/staticimg%2F%E8%A7%82%E9%9F%B3%E9%98%8112.jpg',
      'http://cdn.ssimp.stvsljl.com/staticimg%2F%E8%A7%82%E9%9F%B3%E9%98%8113.jpg',
      'http://cdn.ssimp.stvsljl.com/staticimg%2F%E8%A7%82%E9%9F%B3%E9%98%812.jpg',
      'http://cdn.ssimp.stvsljl.com/staticimg%2F%E8%A7%82%E9%9F%B3%E9%98%813.jpg',
      'http://cdn.ssimp.stvsljl.com/staticimg%2F%E8%A7%82%E9%9F%B3%E9%98%814.jpg',
      'http://cdn.ssimp.stvsljl.com/staticimg%2F%E8%A7%82%E9%9F%B3%E9%98%817.jpg',
      'http://cdn.ssimp.stvsljl.com/staticimg%2F%E8%A7%82%E9%9F%B3%E9%98%818.jpg',
      'http://cdn.ssimp.stvsljl.com/staticimg%2F%E8%A7%82%E9%9F%B3%E9%98%819.jpg']);
    const laoyege = ref(['http://cdn.ssimp.stvsljl.com/staticimg%2F%E8%80%81%E7%88%B7%E9%98%811.jpg',
      'http://cdn.ssimp.stvsljl.com/staticimg%2F%E8%80%81%E7%88%B7%E9%98%812.jpg']);
    const longwangdian = ref(['http://cdn.ssimp.stvsljl.com/staticimg%2F%E9%BE%99%E7%8E%8B%E6%AE%BF1.jpg',
      'http://cdn.ssimp.stvsljl.com/staticimg%2F%E9%BE%99%E7%8E%8B%E6%AE%BF2.jpg',
      'http://cdn.ssimp.stvsljl.com/staticimg%2F%E9%BE%99%E7%8E%8B%E6%AE%BF5.jpg']);
    const muzhandao = ref(['http://cdn.ssimp.stvsljl.com/staticimg%2F%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20230405151210.jpg',
      'http://cdn.ssimp.stvsljl.com/staticimg%2F%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20230405151238.jpg']);
    const pusadian = ref(['http://cdn.ssimp.stvsljl.com/staticimg%2F%E8%8F%A9%E8%90%A8%E6%AE%BF1.jpg',
      'http://cdn.ssimp.stvsljl.com/staticimg%2F%E8%8F%A9%E8%90%A8%E6%AE%BF2.jpg']);
    const qifulu = ref(['http://cdn.ssimp.stvsljl.com/staticimg%2F%E7%A5%88%E7%A6%8F%E8%B7%AF1.jpg',
      'http://cdn.ssimp.stvsljl.com/staticimg%2F%E7%A5%88%E7%A6%8F%E8%B7%AF2.jpg',
      'http://cdn.ssimp.stvsljl.com/staticimg%2F%E7%A5%88%E7%A6%8F%E8%B7%AF3.jpg',
      'http://cdn.ssimp.stvsljl.com/staticimg%2F%E7%A5%88%E7%A6%8F%E8%B7%AF4.jpg',
      'http://cdn.ssimp.stvsljl.com/staticimg%2F%E7%A5%88%E7%A6%8F%E8%B7%AF5.jpg',]);
    const sanxiaoniangniang = ref(['http://cdn.ssimp.stvsljl.com/staticimg%2F%E4%B8%89%E9%9C%84%E5%A8%98%E5%A8%98%E6%AE%BF1.jpg',
      'http://cdn.ssimp.stvsljl.com/staticimg%2F%E4%B8%89%E9%9C%84%E5%A8%98%E5%A8%98%E6%AE%BF2.jpg',]);
    const shipingdai = ref(['http://cdn.ssimp.stvsljl.com/staticimg%2F%E7%9F%B3%E5%B1%8F%E4%BB%A31.jpg',
      'http://cdn.ssimp.stvsljl.com/staticimg%2F%E7%9F%B3%E5%B1%8F%E4%BB%A32.jpg']);
    const suodao = ref(['http://cdn.ssimp.stvsljl.com/staticimg%2F%E7%B4%A2%E9%81%931.jpg']);
    const taohuadong = ref(['http://cdn.ssimp.stvsljl.com/staticimg%2F%E6%A1%83%E8%8A%B1%E6%B4%9E1.jpg']);
    const wanfodian = ref(['http://cdn.ssimp.stvsljl.com/staticimg%2F%E4%B8%87%E4%BD%9B%E6%AE%BF1.jpg',
      'http://cdn.ssimp.stvsljl.com/staticimg%2F%E4%B8%87%E4%BD%9B%E6%AE%BF2.jpg']);
    const wanniansong = ref(['http://cdn.ssimp.stvsljl.com/staticimg%2F%E4%B8%87%E5%B9%B4%E6%9D%BE1.jpg',
      'http://cdn.ssimp.stvsljl.com/staticimg%2F%E4%B8%87%E5%B9%B4%E6%9D%BE2.jpg',
      'http://cdn.ssimp.stvsljl.com/staticimg%2F%E4%B8%87%E5%B9%B4%E6%9D%BE3.jpg',
      'http://cdn.ssimp.stvsljl.com/staticimg%2F%E4%B8%87%E5%B9%B4%E6%9D%BE4.jpg',
      'http://cdn.ssimp.stvsljl.com/staticimg%2F%E4%B8%87%E5%B9%B4%E6%9D%BE5.jpg']);
    const wanghaisi = ref(['http://cdn.ssimp.stvsljl.com/staticimg%2F%E5%BF%98%E6%B5%B7%E5%AF%BA1.jpg']);
    const yelvchu = ref(['http://cdn.ssimp.stvsljl.com/staticimg%2F%E8%80%B6%E5%BE%8B%E6%A5%9A1.jpg',
      'http://cdn.ssimp.stvsljl.com/staticimg%2F%E8%80%B6%E5%BE%8B%E6%A5%9A3.jpg',
      'http://cdn.ssimp.stvsljl.com/staticimg%2F%E8%80%B6%E5%BE%8B%E6%A5%9A4.jpg',
      'http://cdn.ssimp.stvsljl.com/staticimg%2F%E8%80%B6%E5%BE%8B%E6%A5%9A6.jpg',
      'http://cdn.ssimp.stvsljl.com/staticimg%2F%E8%80%B6%E5%BE%8B%E6%A5%9A7.jpg']);
    const youmu = ref(['http://cdn.ssimp.stvsljl.com/staticimg%2F%E5%9C%86%E9%80%9A%E6%AE%BF1.jpg/staticimg%2F%E6%B8%B8%E7%9B%AE1.jpg',
      'http://cdn.ssimp.stvsljl.com/staticimg%2F%E6%B8%B8%E7%9B%AE2.jpg',]);
    const yuantongdian = ref(['http://cdn.ssimp.stvsljl.com/staticimg%2F%E5%9C%86%E9%80%9A%E6%AE%BF1.jpg']);
    const zufeng = ref(['http://cdn.ssimp.stvsljl.com/staticimg%2F%E7%A5%96%E5%B3%B01.jpg',
      'http://cdn.ssimp.stvsljl.com/staticimg%2F%E7%A5%96%E5%B3%B02.jpg',
      'http://cdn.ssimp.stvsljl.com/staticimg%2F%E7%A5%96%E5%B3%B03.jpg']);
    return {
      zhengmen,
      baiyunge,
      bizhenmingshan,
      bolizhandao,
      caishendian,
      congshanrudengshi,
      gongdebei,
      gufokan,
      guanyiting,
      guanyinge,
      laoyege,
      longwangdian,
      muzhandao,
      pusadian,
      qifulu,
      sanxiaoniangniang,
      shipingdai,
      suodao,
      taohuadong,
      wanfodian,
      wanniansong,
      wanghaisi,
      yelvchu,
      youmu,
      yuantongdian,
      zufeng,
    };
  },
  components: { PicturesFalls }
};
</script>

<style scoped>
img {
  width: 100%;
  height: 100%;
  justify-content: center;
  overflow: hidden;
  object-fit: cover;
}

.all {
  height: 100%;
}

.tuji {
  width: 100%;
  height: 400px;
}

.one {
  flex-grow: 1;
}

.two {
  flex-grow: 4;
}

.buju {
  width: 90%;
  min-height: 200px;
  display: flex;
  flex-direction: row;
  margin: auto;
}

.first {
  flex-grow: 1;
}

.flex {
  margin: auto;
  display: flex;
  margin-top: 20px;
  margin-left: 20px;
  margin-right: 20px;
  border-left: 5px solid #838383;
  padding-left: 10px;
}

.pink {
  color: deeppink;
  font-weight: bold;
}

.articlelist {
  margin-top: 20px;
  text-align: left;
  min-width: 200px;
}
</style>
