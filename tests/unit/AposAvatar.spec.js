import { shallowMount } from "@vue/test-utils";
import AposAvatar from "@/components/avatar/AposAvatar.vue";

describe("AposAvatar.vue", () => {
  it("renders props when passed", () => {
    const propsData = {
      alt: "My Avatar",
      src: "/images/me.jpg"
    };

    const wrapper = shallowMount(AposAvatar, {
      propsData
    });

    expect(wrapper.attributes().alt).toMatch(propsData.alt);
    expect(wrapper.attributes().src).toMatch(propsData.src);
    expect(wrapper.element.style.width).toMatch("30px");
  });
});
