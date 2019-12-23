package com.cucumber.stepdefinition;

public class MatrixTransposeExample {

	public static void main(String[] args) {
		int row = 3, column = 2;
		String[][] matrix = { { "Hello", "Welcome" }, { "to", "java"}, {"world","test"} };
		String[][] transpose = new String[column][row];
		for (int i = 0; i < row; i++) {
			for (int j = 0; j < column; j++) {
				transpose[j][i] = matrix[i][j];
			}
		}
		// Display transposed matrix
	//	display(transpose);
		for (String[] x : matrix) {
			for (String y : x) {
				System.out.print(y + "    ");
			}
			System.out.println();
		}
	}

	public static void display(String[][] matrix) {
		System.out.println("The matrix is: ");
		for (String[] x : matrix) {
			for (String y : x) {
				System.out.print(y + "    ");
			}
			System.out.println();
		}
	}
}