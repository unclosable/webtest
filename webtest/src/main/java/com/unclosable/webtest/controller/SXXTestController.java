package com.unclosable.webtest.controller;

import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping(value = "/sxxTest")
public class SXXTestController {

	@RequestMapping("/sxx")
	public ModelAndView showMessage(HttpServletResponse s, @RequestParam(value = "name", required = false, defaultValue = "World") String name) {
		ModelAndView mv = new ModelAndView("sxx");
		return mv;
	}

	@RequestMapping("/doSXX")
	public void doSXX(HttpServletResponse s, String location, String tophref, String cookie, String opener) {
		System.out.println(location);
		System.out.println(tophref);
		System.out.println(cookie);
		System.out.println(opener);
	}
}
