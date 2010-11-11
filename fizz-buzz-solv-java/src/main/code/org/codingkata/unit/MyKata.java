package org.codingkata.unit;

import org.codingkata.unit.api.BaseKataSolution;

public class MyKata extends BaseKataSolution {

    // YOUR IMPLEMENTATION

    public String answer(int number) {
        String result = "";

        if(number % 3 == 0 && number % 5 == 0) {
          result = "fizzbuzz";  
        } else if(number % 3 == 0) {
            result = "fizz";
        } else if(number % 5 == 0) {
            result = "buzz";
        } else {
            result = Integer.toString(number);
        }

        return result;
    }
}