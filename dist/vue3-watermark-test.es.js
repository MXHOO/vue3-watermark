import { defineComponent as s, ref as f, watch as i, onMounted as p, createElementBlock as u, openBlock as d, renderSlot as m } from "vue";
const x = /* @__PURE__ */ s({
  __name: "WaterMark",
  props: {
    text: { type: String, default: "Watermark" },
    fontSize: { type: Number, default: 16 },
    color: { type: String, default: "rgba(0,0,0,0.15)" },
    rotate: { type: Number, default: -20 }
  },
  setup(o) {
    const t = o, a = f(), c = () => {
      const r = document.createElement("canvas"), e = r.getContext("2d");
      e.font = `${t.fontSize}px Arial`;
      const l = e.measureText(t.text).width;
      return r.width = l * 2, r.height = t.fontSize * 3, e.translate(r.width / 2, r.height / 2), e.rotate(Math.PI / 180 * t.rotate), e.fillStyle = t.color, e.font = `${t.fontSize}px Arial`, e.textAlign = "center", e.textBaseline = "middle", e.fillText(t.text, 0, 0), r.toDataURL();
    }, n = () => {
      a.value && (a.value.style.backgroundImage = `url(${c()})`, a.value.style.backgroundRepeat = "repeat");
    };
    return i(() => [t.text, t.fontSize, t.color], n), p(n), (r, e) => (d(), u("div", {
      ref_key: "wrapperRef",
      ref: a,
      class: "watermark-wrapper"
    }, [
      m(r.$slots, "default", {}, void 0, !0)
    ], 512));
  }
}), g = (o, t) => {
  const a = o.__vccOpts || o;
  for (const [c, n] of t)
    a[c] = n;
  return a;
}, _ = /* @__PURE__ */ g(x, [["__scopeId", "data-v-c481c5a5"]]);
export {
  _ as default
};
