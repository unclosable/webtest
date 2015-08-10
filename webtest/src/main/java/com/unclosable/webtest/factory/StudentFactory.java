package com.unclosable.webtest.factory;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Component;

import com.unclosable.webtest.entity.Student;

@Component
public class StudentFactory {
	public List<Student> getTestStudentList() {
		List<Student> reList = new ArrayList<Student>();
		reList.add(new Student("Tome", "group1", 1, 1));
		reList.add(new Student("Terry", "group2", 2, 0));
		reList.add(new Student("Jemmy", "group3", 3, 0));
		return reList;
	}
}
