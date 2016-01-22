package com.unclosable.webtest.test;

import java.util.function.Consumer;

public interface IFunc {

	default void doSamething(Consumer action) {
		// action.
	}
}
