package com.unclosable.webtest.test;

import java.util.HashMap;
import java.util.Map;

public class FuncTest {
	private static void out(String key, String value) {
		System.out.println("key:" + key + ",value:" + value);
	}

	public static void main(String[] args) {
		Map<String, String> map = new HashMap<>();

		map.put("1", "2");
		map.put("11", "22");
		map.put("111", "222");
		map.put("1111", "2222");

		map.forEach((String key, String value) -> {
			System.out.println("key:" + key + ",value:" + value);
		});
		map.forEach(FuncTest::out);
		map.values().stream().filter(str -> str.length() > 0).map(str -> str += "hahahaha").forEach(System.out::println);
	}
}
