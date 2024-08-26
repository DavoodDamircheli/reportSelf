<span id="top"></span>

---
title: "my peri"
---

<script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>


## Table of content
- [neigboorhod array](#Nbd)
  - [sparse matrices in matlab](#sparse-matlab)
  - [Linear indices in MATLAB](#sub2ind)
- [nterpretation of Nbd times V](#weighted-sum)
- [finding differences](#mydiff)

<!-- nd see the changes live -->
<!-- ls  selfTuroring.md | entr pandoc /_ -s -o selfTuroringehtml --css pandoc.css -->


---

## sparse matlab

###  Example

Let's assume the following neighborhood relationships:

- Node 1 has node 2 and node 3 as neighbors.
- Node 2 has node 1 and node 3 as neighbors.
- Node 3 has node 1 as a neighbor.

We can represent this using a sparse matrix as follows:

```matlab

Nbd_sparse = sparse([1, 1, 2, 2, 3], [2, 3, 1, 3, 1], 1, 3, 3);

```

### Explanation of the Sparse Matrix

- `Nbd_sparse` is a sparse matrix with 5 non-zero elements.
- The first argument to `sparse` is an array of row indices `[1, 1, 2, 2, 3]`.
- The second argument to `sparse` is an array of column indices `[2, 3, 1, 3, 1]`.
- The third argument `1` means that the value at each specified `(row, column)` position is set to 1.
- `3, 3` specifies the size of the sparse matrix.

### Matrix Representation

The sparse matrix `Nbd_sparse` represents the following neighborhood relationships:

```
Nbd_sparse =
   (1,2)   1
   (1,3)   1
   (2,1)   1
   (2,3)   1
   (3,1)   1
```

### Using `find` to Extract Indices

When you use `[row, col] = find(Nbd_sparse);`, you get:

```matlab
row =
     1
     1
     2
     2
     3

col =
     2
     3
     1
     3
     1
```

### What This Means

- The non-zero element at position (1, 2) indicates that node 1 has node 2 as a neighbor.
- The non-zero element at position (1, 3) indicates that node 1 has node 3 as a neighbor.
- The non-zero element at position (2, 1) indicates that node 2 has node 1 as a neighbor.
- The non-zero element at position (2, 3) indicates that node 2 has node 3 as a neighbor.
- The non-zero element at position (3, 1) indicates that node 3 has node 1 as a neighbor.

### How It Is Used

The arrays `row` and `col` together describe all the neighbor relationships in the grid. Each pair `(row(i), col(i))` represents a connection where `col(i)` is a neighbor of `row(i)`.

### Full Example in MATLAB

```matlab
% Create the sparse matrix
Nbd_sparse = sparse([1, 1, 2, 2, 3], [2, 3, 1, 3, 1], 1, 3, 3);

% Find non-zero elements
[row, col] = find(Nbd_sparse);

% Display the indices
disp('Row indices:');
disp(row);

disp('Column indices:');
disp(col);

% Example velocity array for 3 points in 2D space
velocity = [
    1.0, 2.0; % velocity of point 1 (vx1, vy1)
    3.0, 4.0; % velocity of point 2 (vx2, vy2)
    5.0, 6.0  % velocity of point 3 (vx3, vy3)
];

% Compute differences in velocity components
v_diff_x = velocity(row, 1) - velocity(col, 1); % Differences in x component of velocity
v_diff_y = velocity(row, 2) - velocity(col, 2); % Differences in y component of velocity

% Combine differences into a single array
v_diff = [v_diff_x, v_diff_y];

% Display the result
for i = 1:max(row)
    idx = (row == i);
    fprintf('Velocity differences for point %d:\n', i);
    disp(v_diff(idx, :));
end
 ```

This example demonstrates how to use a sparse matrix to represent neighborhood relationships, extract indices using   **find**, and perform vectorized operations on the velocity differences between points and their neighbors.


---

## sub2ind

- step by step to explain the concept of linear indices more clearly.

### Example Matrix

Consider a simple \(3 \times 3\) matrix `Nbd`:

```
\[ 
Nbd = \begin{bmatrix}
0 & 2 & 0 \\
4 & 0 & 6 \\
0 & 0 & 3
\end{bmatrix}
\]
```

### Step 1: Find Non-Zero Elements

First, we use the `find` function to get the row and column indices of non-zero elements:

```matlab
[row, col] = find(Nbd);
```

For our matrix `Nbd`, the non-zero elements are `2`, `4`, `6`, and `3`. Their positions (row, column) are:

- \(2\) is at (1, 2)
- \(4\) is at (2, 1)
- \(6\) is at (2, 3)
- \(3\) is at (3, 3)

So, `row` and `col` will be:

```matlab
row = [1; 2; 2; 3];
col = [2; 1; 3; 3];
```

### Step 2: Convert to Linear Indices

Next, we convert these row and column indices to linear indices using `sub2ind`:

```matlab
linear_indices = sub2ind([3, 3], row, col);
```

Here, `[3, 3]` specifies the size of the matrix (3 rows and 3 columns).

### Understanding Linear Indices

In MATLAB, a matrix is stored in column-major order. This means the elements are stored column by column. For a \(3 \times 3\) matrix, the linear indices are as follows:

\[ 
\begin{array}{ccc}
1 & 4 & 7 \\
2 & 5 & 8 \\
3 & 6 & 9 
\end{array}
\]

Let's convert our row and column indices to linear indices:

1. Element at (1, 2) (which is `2`):
   - Linear index = 1 + (2-1) \* 3 = 4

2. Element at (2, 1) (which is `4`):
   - Linear index = 2 + (1-1) \* 3 = 2

3. Element at (2, 3) (which is `6`):
   - Linear index = 2 + (3-1) \* 3 = 8

4. Element at (3, 3) (which is `3`):
   - Linear index = 3 + (3-1) \* 3 = 9

So, `linear_indices` will be:

```matlab
linear_indices = [4; 2; 8; 9];
```

### Summary

For our example matrix:

\[ 
Nbd = \begin{bmatrix}
0 & 2 & 0 \\
4 & 0 & 6 \\
0 & 0 & 3
\end{bmatrix}
\]

The non-zero elements and their linear indices are:

- `2` at (1, 2) → Linear index 4
- `4` at (2, 1) → Linear index 2
- `6` at (2, 3) → Linear index 8
- `3` at (3, 3) → Linear index 9

Thus, the linear indices of the non-zero elements in the matrix `Nbd` are `[4, 2, 8, 9]`.

---

## weighted sum

The product `$\text{Nbd} \times \text{V}$` can be interpreted as a weighted sum of the properties of neighboring points for each point in the network or grid. Here's a more detailed explanation:

1. **Neighbor Matrix (Nbd)**: The matrix \( \text{Nbd} \) represents the connectivity or adjacency between points. If \( \text{Nbd}(i, j) \) is non-zero, it indicates that point \( j \) is a neighbor of point \( i \). The value of \( \text{Nbd}(i, j) \) might represent a weight, such as the strength or distance of the connection.

2. **Property Vector (V)**: The vector \( \text{V} \) contains some property or value associated with each point. For example, \( \text{V}(i) \) could represent the temperature, concentration, or any other property at point \( i \).

3. **Product Interpretation**: The product \( \text{Nbd} \times \text{V} \) results in a new vector where each element is the weighted sum of the properties of the neighboring points. Specifically, the \( i \)-th element of the resulting vector can be interpreted as:

```
\[ (\text{Nbd} \times \text{V})_i = \sum_j \text{Nbd}(i, j) \cdot \text{V}(j) \]

```
![myimage](myperiImage/1.png)

This means that for each point \( i \), you sum the properties \( \text{V}(j) \) of its neighbors \( j \), each multiplied by the corresponding weight \( \text{Nbd}(i, j) \).

### Practical Interpretation

- **Smoothing or Averaging**: If \( \text{Nbd} \) represents a simple adjacency matrix (e.g., 0 or 1 values indicating whether points are neighbors), \( \text{Nbd} \times \text{V} \) can be seen as an operation that averages or smooths the property values over neighboring points.
- **Diffusion or Influence**: In physical systems, \( \text{Nbd} \) might represent a diffusion operator or influence matrix. In this case, \( \text{Nbd} \times \text{V} \) can describe how the property \( \text{V} \) spreads or influences neighboring points.
- **Graph-based Operations**: In graph theory, this operation is akin to applying a graph filter or aggregation function, where the value at each node is updated based on its neighbors.

### Example

Suppose we have:

\[ \text{Nbd} = \begin{pmatrix}
0 & 1 & 1 \\
1 & 0 & 1 \\
1 & 1 & 0 \\
\end{pmatrix}, \quad \text{V} = \begin{pmatrix}
2 \\
3 \\
5 \\
\end{pmatrix} \]

Then:

\[ \text{Nbd} \times \text{V} = \begin{pmatrix}
0 & 1 & 1 \\
1 & 0 & 1 \\
1 & 1 & 0 \\
\end{pmatrix} \times \begin{pmatrix}
2 \\
3 \\
5 \\
\end{pmatrix} = \begin{pmatrix}
1 \cdot 3 + 1 \cdot 5 \\
1 \cdot 2 + 1 \cdot 5 \\
1 \cdot 2 + 1 \cdot 3 \\
\end{pmatrix} = \begin{pmatrix}
8 \\
7 \\
5 \\
\end{pmatrix} \]

Here, each element of the resulting vector is the sum of the properties of its neighbors. For example, the first element (8) is the sum of the properties of the second (3) and third (5) points.







## mydiff

```matlab

        [row, col] = find(Nbd > 0);
        linear_indices = sub2ind([m, n], row, col);
        neighbors = Nbd(linear_indices);
```

Let's break down the provided MATLAB code to understand what it does:

### 1. `find(Nbd > 0)`

This line finds the indices of the elements in the array `Nbd` that are greater than 0. Here, `Nbd` is presumably the neighborhood array where each row contains the neighbors of `x_i`. The `find` function returns the row and column indices of these elements:

- `row` contains the row indices.
- `col` contains the column indices.

### 2. `linear_indices = sub2ind([m, n], row, col)`

The `sub2ind` function converts the row and column subscripts (indices) into linear indices. The arguments `[m, n]` specify the size of the matrix `Nbd`. This is useful because sometimes it's easier or necessary to work with linear indices rather than row and column subscripts.

### 3. `neighbors = Nbd(linear_indices)`

This line uses the linear indices to extract the corresponding elements from the `Nbd` array. Essentially, it retrieves all the neighbor values from `Nbd` that are greater than 0 and stores them in the `neighbors` array.

### Summary

The provided code snippet:

1. Finds the indices of all elements in `Nbd` that are greater than 0.
2. Converts these indices to linear indices.
3. Retrieves the corresponding neighbor values from `Nbd` using these linear indices.

In practical terms, this code is used to identify and extract all the neighbors that have a relationship (indicated by values greater than 0) with the elements in the array.

Sure, let's go through an example to illustrate how this code works.

Let's assume we have a 4x4 neighborhood array `Nbd`:

```matlab
Nbd = [
    0  1  0  2;
    3  0  4  0;
    0  5  0  6;
    7  0  8  0
];
```

We will follow the steps of the provided code.

### Step 1: `find(Nbd > 0)`

First, we find the indices of the elements in `Nbd` that are greater than 0.

```matlab
[row, col] = find(Nbd > 0);
```

Here, `row` and `col` will be:

```
row = [1  1  1  2  2  3  3  3  4  4]
col = [2  4  4  1  3  2  4  4  1  3]
```

### Step 2: `linear_indices = sub2ind([m, n], row, col)`

Next, we convert these row and column subscripts to linear indices. The size of the matrix `Nbd` is `[4, 4]`.

```matlab
linear_indices = sub2ind([4, 4], row, col);
```

The linear indices will be:

```
linear_indices = [2  4  8  5  7  10  12  14  15  17]
```

### Step 3: `neighbors = Nbd(linear_indices)`

Finally, we use these linear indices to extract the corresponding elements from `Nbd`.

```matlab
neighbors = Nbd(linear_indices);
```

The `neighbors` array will be:

```
neighbors = [1  2  3  4  5  6  7  8]
```

### Summary of the Example

Given the `Nbd` array:

```matlab
Nbd = [
    0  1  0  2;
    3  0  4  0;
    0  5  0  6;
    7  0  8  0
];
```

The steps:

1. Find the row and column indices of elements greater than 0.
2. Convert these indices to linear indices.
3. Extract the neighbor values using the linear indices.

The resulting `neighbors` array contains all the non-zero elements of `Nbd`:

```
neighbors = [1  2  3  4  5  6  7  8]
```
![myimage25](deepimage/deep25.png)
![myimage26](deepimage/deep26.png)


---

<div id="back-to-top" style="position: fixed; bottom: 20px; right: 20px; display: none;">


<a href="#top">&#x2191; Back to Top</a>


</div>

<script>
    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {scrollFunction()};
    
    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("back-to-top").style.display = "block";
        } else {
            document.getElementById("back-to-top").style.display = "none";
        }
    }

    // When the user clicks on the button, scroll to the top of the document
    document.getElementById("back-to-top").onclick = function() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }
</script>

