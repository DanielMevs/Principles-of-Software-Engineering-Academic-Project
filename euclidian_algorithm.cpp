#include <iostream>
using namespace std;

int euclid(int a, int b);

int main()
{
	int a, b;
	int gcd;
	cout << "Please input an integer: ";
	cin >> a;
	cout << "Please input a divisor: ";
	cin >> b;
	cout << "A   B   R" << endl;
	cout << "_________" << endl;
	gcd = euclid(a, b);
	cout << "The greatest common divisor is " << gcd << "." << endl;
	

	return 0;
}

int euclid(int a, int b)
{
	
	if (b == 0)
	{
		return  a;
	}

	else
	{
		euclid(b, a % b);
	}
	
	cout << a << "   " << b << "   " << a%b << endl;
}
