package com.unclosable.webtest.controller;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.unclosable.webtest.factory.StudentFactory;

@Controller
@RequestMapping("/json")
public class DataController {
	@Resource
	StudentFactory studentFactory;

	@RequestMapping("student.json")
	@ResponseBody
	public ModelAndView getStudent(
			@RequestParam(value = "name", required = false, defaultValue = "World") String name) {
		ModelAndView mv = new ModelAndView();
		mv.addObject("studentList", studentFactory.getTestStudentList());
		return mv;
	}

}
