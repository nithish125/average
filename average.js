let sum = 0, numbers;
avg = 0;
numbers = [3,5,74,23,12];
for(i=0;i<numbers.length;i++)
{
    sum=numbers[i]+sum;
}
avg = sum / numbers.length;
console.log(+avg);