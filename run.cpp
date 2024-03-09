#include <bits/stdc++.h>
using namespace std;

class Node{
    Node(int x, int y){
        this.x = x;
        this.y = y;
    }
};

bool isValid(bool flag, int i, int j, vector<int>&grid){

    if(i>0 && i<grid.size() && j>0 && j<grid.size() && grid[i][j] !=0){
        return flag = true;
    }
    else{
       return  flag = false;
    }
}

int rottenOranges(vector<int> &grid){
 queue<Node>pq;
 int count = 0;
 for(int i=0; i<grid.size(); i++){
    for(int j=0; j<grid[i].size(); j++){
           
           if(grid[i][j] == 2){
            pq.push = new Node(i, j);
           }

           bool flag = false;
           pq.push(new Node(-1,-1));

          if(!pq.empty()){
            while(!pq.empty()){
                Node *temp = pq.pop();
                
                if(isValid(flag, i+1, j, grid)){
                    if(flag == false){
                        flag = true;
                        count++;
                        grid[i+1][j] = 2;
                        pq.push(new Node(i+1,j));
                    } 
                }

               if(isValid(flag, i-1, j, grid)){
                    if(flag == false){
                        flag = true;
                        count++;
                        grid[i-1][j] = 2;
                        pq.push(new Node(i-1,j));
                    } 
                }


              if(isValid(flag, i, j+1, grid)){
                    if(flag == false){
                        flag = true;
                        count++;
                        grid[i][j+1] = 2;
                        pq.push(new Node(i,j+1));
                    } 
                }

                if(isValid(flag, i, j-1, grid)){
                    if(flag == false){
                        flag = true;
                        count++;
                        grid[i][j-1] = 2;
                        pq.push(new Node(i,j-1));
                    } 
                }

            }
          }
    }
 }
 return count ;
}

int main(){
 vector<int>grid = {{0,1,2},{0,1,2}, {2,1,1}};
 int res = rottenOranges(grid);
 cout<<res;
    return 0;
}