package com.unclosable.webtest.entity;

public class Student {
	private String name;
	private String groupName;
	private int age;
	private int sex;

	public Student() {
	}

	public Student(String name, String groupName, int age, int sex) {
		this.name = name;
		this.groupName = groupName;
		this.age = age;
		this.sex = sex;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getGroupName() {
		return groupName;
	}

	public void setGroupName(String groupName) {
		this.groupName = groupName;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public int getSex() {
		return sex;
	}

	public void setSex(int sex) {
		this.sex = sex;
	}

}
