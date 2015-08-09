package com.unclosable.webtest.controller;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import com.unclosable.webtest.test.testBean;

@Controller
public class HelloWorldController {
	@Resource
	testBean testBean;

	String message = "Welcome to Spring MVC!";

	@RequestMapping("/hello")
	public ModelAndView showMessage(
			@RequestParam(value = "name", required = false, defaultValue = "World") String name) {
		testBean.doSomething();
		ModelAndView mv = new ModelAndView("test");
		mv.addObject("message", message);
		mv.addObject("name", name);
		return mv;
	}
}
