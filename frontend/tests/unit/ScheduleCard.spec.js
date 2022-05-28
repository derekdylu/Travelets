import { mount } from "@vue/test-utils";
import ScheduleCard from "@/components/AddNotes/ScheduleCard.vue";

describe("ScheduleCard.vue test", () => {
    it("render props.year when passed", () => {
        const wrapper = mount(ScheduleCard, {
            props: {
                year: "2023",
            },
        });
        expect(wrapper.text()).toMatch("2023");
    });

});