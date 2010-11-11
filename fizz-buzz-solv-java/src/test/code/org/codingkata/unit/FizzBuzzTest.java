package org.codingkata.unit;

import org.testng.annotations.Test;
import org.testng.Assert;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by IntelliJ IDEA.
 * User: davidmosher
 * Date: Nov 10, 2010
 * Time: 9:11:46 PM
 * To change this template use File | Settings | File Templates.
 */

public class FizzBuzzTest {

    MyKata sut = new MyKata();

    @Test
    public void sanityTest() {
        assert(true);
    }

    @Test
    public void shouldReturnFizzGivenThree() {
        String result = sut.answer(3);
        Assert.assertEquals(result, "fizz");
    }

    @Test
    public void shouldReturnBuzzGivenFive() {
        String result = sut.answer(5);
        Assert.assertEquals(result, "buzz");
    }

    @Test
    public void testDivisibleByThreeReturnsFizz() throws Exception {
        List<Integer> values = new ArrayList<Integer>();
        values.add(3);
        values.add(6);
        values.add(9);
        for(Integer i : values) {
            Assert.assertEquals(sut.answer(i), "fizz");
        }
    }

    @Test
    public void testDivisibleByFiveReturnsBuzz() throws Exception {
        List<Integer> values = new ArrayList<Integer>();
        values.add(5);
        values.add(10);
        for(Integer i : values) {
            Assert.assertEquals(sut.answer(i), "buzz");
        }
    }

    @Test
    public void testNotDivisibleByThreeOrFiveReturnsSameNumber() throws Exception {
        String result = sut.answer(7);
        Assert.assertEquals(result, "7");
    }

    @Test
    public void testDivisibleByThreeAndFiveReturnsFizzBuzz() throws Exception {
        String result = sut.answer(15);
        Assert.assertEquals(result, "fizzbuzz");
    }
}
