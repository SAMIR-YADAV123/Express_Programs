#include<iostream>
using namespace std;

int partition(int arr[],int l,int h){
    int pivot=arr[l];
    int i=l;
    int j=h;
    while(i<j){
        do{
            i++;
        }while(arr[i]<=pivot);

        do{
            j--;
        }while(arr[j]>pivot);
      
      if(i<j){
          int temp=arr[i];
          arr[i]=arr[j];
          arr[j]=temp;
          i++;
          j--;
      }
      int temp=arr[l];
      arr[l]=arr[j];
      arr[j]=temp;
    }

    return j;
}


int quicksort(int arr[],int a,int f){
    if(a<f){
        int j=partition(arr,a,f);
        quicksort(arr,a,j);
        quicksort(arr,j+1,f);
    }
}
int main(){
    int arr[]={2,1,7,6,9};
    quicksort(arr,0,5);
    for(int i=0;i<5;i++){
        cout<<arr[i]<<" ";
    }
}