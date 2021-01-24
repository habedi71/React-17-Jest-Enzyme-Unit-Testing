import App from "./App";
import { mount } from "enzyme";

// import Counter from "./Counter";
// import { shallow } from "enzyme"; //with shallow test is not done for child components

describe("App is running", () => {
	let wrapper;
	beforeEach(() => {
		wrapper = mount(<App />);

		// wrapper = shallow(<Counter />);
	});

	test("renders header", () => {
		expect(wrapper.find("h1").text()).toContain("This is counter app");
	});

	test("render button with text of `Increament`", () => {
		expect(wrapper.find("#increament-btn").text()).toBe("Increament");
	});

	test("render button with text of `Decreament`", () => {
		expect(wrapper.find("#decreament-btn").text()).toBe("Decreament");
	});

	test("render initial state in div", () => {
		expect(wrapper.find("#counter-value").text()).toBe("0");
	});

	test("render increamnet btn event and increament value", () => {
		wrapper.find("#increament-btn").simulate("click");
		expect(wrapper.find("#counter-value").text()).toBe("1");
	});

	test("render decreament btn event and not less than 0", () => {
		wrapper.find("#decreament-btn").simulate("click");
		const counterValue = wrapper.find("#counter-value").text();
		expect(Number(counterValue) <= 0).toBeTruthy();
	});
});
