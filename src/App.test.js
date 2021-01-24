import App from "./App";
import { mount } from "enzyme";

// import Counter from "./Counter";
// import { shallow } from "enzyme"; //with shallow test is not done for child components

describe("<App /> and Child Components", () => {
	let wrapper;
	beforeEach(() => {
		wrapper = mount(<App />);

		// wrapper = shallow(<Counter />);
	});

	test("render header", () => {
		expect(wrapper.find("h1").text()).toContain("This is counter app");
	});

	test("render button with text of `Increment`", () => {
		expect(wrapper.find("#increment-btn").text()).toBe("Increment");
	});

	test("render button with text of `Decrement`", () => {
		expect(wrapper.find("#decrement-btn").text()).toBe("Decrement");
	});

	test("render initial state in div", () => {
		expect(wrapper.find("#counter-value").text()).toBe("0");
	});

	test("render incremnet btn event and increment value", () => {
		wrapper.find("#increment-btn").simulate("click");
		expect(wrapper.find("#counter-value").text()).toBe("1");
	});

	test("render decrement btn event and value not less than 0", () => {
		wrapper.find("#decrement-btn").simulate("click");
		const counterValue = wrapper.find("#counter-value").text();
		expect(Number(counterValue) <= 0).toBeTruthy();
	});
});
