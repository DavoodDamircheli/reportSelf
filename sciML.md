<span id="top"></span>

---

sciML
---

# Table of content
- [virtual environment in python](#ve-in-python)
  - [list of virtual environment](#list-of-ve)
- [install cuda ](#cuda)
- [install pytorch](#pytorch)
- [Deeplearning](#deep-learning)
- [physic informed N N](#pINN)
- [data training in NN and PINNs](#NN)

<!-- nd see the changes live -->
<!-- ls  selfTuroring.md | entr pandoc /_ -s -o selfTuroringehtml --css pandoc.css -->


---

# ve in python 
### What is a Virtual Environment in Python?

A virtual environment in Python is an isolated environment that allows you to manage dependencies for your projects separately. This means you can have different versions of libraries and packages for different projects without conflicts. It's especially useful for managing dependencies and avoiding version conflicts.

### Why Use Virtual Environments?

1. **Isolation:** Each virtual environment has its own set of installed packages, independent of others.
2. **Dependency Management:** Different projects can use different versions of the same package.
3. **Avoid Conflicts:** Prevents conflicts between package versions required by different projects.

### Important Commands for Virtual Environments

Here are some important commands to create, activate, deactivate, and manage virtual environments:

#### 1. Install `venv` Module

First, ensure you have the `venv` module available. It's included in the standard library for Python 3.3 and later.

```bash
sudo apt install python3-venv
```

#### 2. Create a Virtual Environment

Use the `venv` module to create a virtual environment. Replace `myenv` with your desired environment name.

```bash
python3 -m venv myenv
```

This creates a directory named `myenv` containing the virtual environment.

#### 3. Activate the Virtual Environment

To start using the virtual environment, you need to activate it. The command varies depending on your operating system.

- **On Linux or macOS:**
  ```bash
  source myenv/bin/activate
  ```

- **On Windows:**
  ```bash
  myenv\Scripts\activate
  ```

After activation, your terminal prompt will change to indicate that you're working inside the virtual environment.

#### 4. Deactivate the Virtual Environment

To stop using the virtual environment and return to the global Python environment, use:

```bash
deactivate
```

#### 5. Installing Packages

Once the virtual environment is activated, you can install packages using `pip` without affecting the global Python environment.

```bash
pip install package_name
```

For example, to install `numpy`:

```bash
pip install numpy
```

#### 6. List Installed Packages

To list all the packages installed in the virtual environment, use:

```bash
pip list
```

#### 7. Freeze and Recreate Environments

To save the current state of the environment (list of installed packages and their versions), you can create a `requirements.txt` file:

```bash
pip freeze > requirements.txt
```

To recreate the environment in another setup or for sharing, use:

```bash
pip install -r requirements.txt
```

### Example Workflow

Here's a simple example workflow:

1. **Create a virtual environment:**
   ```bash
   python3 -m venv myenv
   ```

2. **Activate the virtual environment:**
   ```bash
   source myenv/bin/activate
   ```

3. **Install a package:**
   ```bash
   pip install numpy
   ```

4. **List installed packages:**
   ```bash
   pip list
   ```

5. **Save the environment:**
   ```bash
   pip freeze > requirements.txt
   ```

6. **Deactivate the virtual environment:**
   ```bash
   deactivate
   ```

Using virtual environments ensures that your projects remain self-contained and easier to manage.

---


## list of ve

To find the list of virtual environments (VEs) created on your system, you need to keep track of where you've created them, as there isn't a built-in command to list all virtual environments like you might find for packages or other resources. Here are a few methods you can use:

### 1. Directory Organization

A common practice is to keep all your virtual environments in a specific directory. For example, you might create a directory called `venvs` in your home directory to store all your virtual environments.

1. **Create a Directory for Virtual Environments:**
   ```bash
   mkdir ~/venvs
   ```

2. **Create Virtual Environments in This Directory:**
   ```bash
   python3 -m venv ~/venvs/myenv1
   python3 -m venv ~/venvs/myenv2
   ```

3. **List Virtual Environments:**
   ```bash
   ls ~/venvs
   ```

This way, you can easily see all your virtual environments by listing the contents of the `venvs` directory.

### 2. Using `virtualenvwrapper`

`virtualenvwrapper` is a set of shell scripts that help manage your virtual environments. It adds some nice features, like a centralized location for all your environments and easy commands to work with them.

1. **Install `virtualenvwrapper`:**
   ```bash
   pip install virtualenvwrapper
   ```

2. **Set Up `virtualenvwrapper`:**

   Add the following lines to your shell startup file (e.g., `~/.bashrc` or `~/.zshrc`):
   ```bash
   export WORKON_HOME=~/venvs
   source /usr/local/bin/virtualenvwrapper.sh
   ```

   Then source the file to apply the changes:
   ```bash
   source ~/.bashrc
   ```

3. **Create a Virtual Environment with `virtualenvwrapper`:**
   ```bash
   mkvirtualenv myenv
   ```

4. **List All Virtual Environments:**
   ```bash
   lsvirtualenv
   ```

### 3. Manual Tracking

If you haven't been using a centralized directory or tool like `virtualenvwrapper`, you may need to search for virtual environments manually. Virtual environments typically have a specific directory structure with a `bin` (Linux/macOS) or `Scripts` (Windows) directory containing the `activate` script.

1. **Find Virtual Environments in Your Home Directory:**
   ```bash
   find ~ -name "activate" -type f
   ```

This command will search for files named `activate` in your home directory, which are part of the virtual environment structure.

### Summary

- **Centralized Directory:** Keep all virtual environments in a specific directory and list the contents of that directory.
- **`virtualenvwrapper`:** Use `virtualenvwrapper` to manage and list virtual environments easily.
- **Manual Search:** Use the `find` command to locate virtual environments if you haven't been organizing them centrally.

By adopting one of these practices, you can easily keep track of your virtual environments.



---

# cuda  

It seems like the `nvcc` command is still not found, which indicates that it might not be properly set in your PATH. Let's ensure everything is correctly set up.

### Step 1: Verify CUDA Installation Path
Ensure that the CUDA installation path is correctly set in your environment variables. By default, CUDA installs to `/usr/local/cuda`.

### Step 2: Add CUDA to PATH and LD_LIBRARY_PATH
Add the CUDA binary directory to your PATH and LD_LIBRARY_PATH environment variables. Open the `.bashrc` file:

```bash
nano ~/.bashrc
```

Add the following lines at the end of the file (adjust the version number if necessary):

```bash
export PATH=/usr/local/cuda-12.5/bin:$PATH
export LD_LIBRARY_PATH=/usr/local/cuda-12.5/lib64:$LD_LIBRARY_PATH
```

Save and close the file, then source it to apply the changes:

```bash
source ~/.bashrc
```

### Step 3: Verify the Environment Variables
Verify that the environment variables are correctly set:

```bash
echo $PATH
echo $LD_LIBRARY_PATH
```

Ensure that `/usr/local/cuda-12.5/bin` is included in the PATH and `/usr/local/cuda-12.5/lib64` is included in the LD_LIBRARY_PATH.

### Step 4: Verify CUDA Installation Again
Now, try verifying the CUDA installation again:

```bash
nvcc --version
```

### Step 5: Check CUDA Directory
If `nvcc` is still not found, ensure that it exists in the expected directory:

```bash
ls /usr/local/cuda-12.5/bin/nvcc
```

If `nvcc` is present, but still not recognized, you might need to restart your terminal or system to apply the changes fully.

### Additional Step: Install CUDA Toolkit Manually (if necessary)
If you still encounter issues, you might need to manually install the CUDA toolkit using:

```bash
sudo apt install nvidia-cuda-toolkit
```

After completing these steps, you should be able to use the `nvcc` command and have the CUDA toolkit properly configured on your system.


---


# deep learning 

![myimage](deepimage/deep1.png)
![myimage2](deepimage/deep2.png)
![myimage3](deepimage/deep3.png)
![myimage4](deepimage/deep4.png)


- tanh activation function is popular in the sciml 

- search G about sciML
## universal approximation 


- theorem of universal approximation 

![myimage6](deepimage/deep6.png)

## convolutonal neural Network(CNN)
![myimage7](deepimage/deep7.png)
![myimage8](deepimage/deep8.png)

![myimage9](deepimage/deep9.png)

## Depth is key



![myimage10](deepimage/deep10.png)
 

it is not about the number of parameters, but the number of layers. see the cnn in the plot.



## ploluar deep learning tasks


![myimage11](deepimage/deep11.png)
![myimage12](deepimage/deep12.png)



## probabilistic perspective and deep learning!!

![myimage13](deepimage/deep13.png)



![myimage14](deepimage/deep14.png)


## unsuperivised learning


![myimage15](deepimage/deep15.png)



## autoregression

- chatGPt
- stoch price 


![myimage16](deepimage/deep16.png)

## generative modeling 

- GANs



![myimage17](deepimage/deep17.png)

# training a Neural Network



![myimage18](deepimage/deep18.png)



# pINN
## Intro to PINNs



![myimage19](deepimage/deep27.png)


## an example: Burgers' Equation 


![myimage19](deepimage/deep28.png)


- Latine Hypercube sampling ?
- L-BFGS optimiser???
- why **Tanh** activation fucntion? continously differentiable action function, since we need second order differential equation and Relu is peice wise is linear!!


![myimage19](deepimage/deep29.png)

## Training PINNs

---

**Training loop:**

1. Sample boundary/physics training points
2. Compute network outputs
3. Compute 1st and 2nd order gradient of network output **with respect to network input**
4. Compute loss
5. Compute gradient of loss function **with respect to network parameters**
6. Take gradient descent step

How can we compute the gradients (e.g., \(\frac{dNN}{dt}\) and \(\frac{dL}{d\theta}\)) required in steps 3 and 5?




![myimage19](deepimage/deep30.png)
![myimage19](deepimage/deep31.png)
![myimage19](deepimage/deep32.png)


```python
# PINN training pseudocode

#2.
t.requires_grad_(True)  # tells PyTorch to start tracking graph
theta.requires_grad_(True)
u = NN(t, theta)

#3.
dudt = torch.autograd.grad(u, t, torch.ones_like(u), create_graph=True)[0]
d2udt2 = torch.autograd.grad(dudt, t, torch.ones_like(u), create_graph=True)[0]

#4.
physics_loss = torch.mean(m*d2udt2 + mu*dudt + k*u)**2)
loss = physics_loss + lambda_boundary_loss

#5.
dtheta = torch.autograd.grad(loss, theta)[0]
```

![myimage19](deepimage/deep33.png)
---
![myimage19](deepimage/deep34.png)
Here is the text from the image you provided:

---

**Computational cost of higher order derivatives**

- **Note**, gradient computation roughly **doubles** the size of the computational graph*
  - The cost of evaluating \(\frac{\partial^n N}{\partial t^n}\) grows exponentially with \(n\) (!)
  - Most time is spent computing gradients, not the forward pass, when training PINNs

- More precisely, given some \(f: \mathbb{R}^n \rightarrow \mathbb{R}^m\), its Jacobian \(J \in \mathbb{R}^{m \times n}\) and some vector \(v \in \mathbb{R}^n\):

\[
\text{TIME}(f,v) \leq \omega \, \text{TIME}(f)
\]

With a constant \(\omega \in [2, 2.5]\) using autodifferentiation

---

For detailed derivation, see e.g.: Griewank and Walther, Evaluating Derivatives, Ch 3.1, SIAM (2008).

---

**401-4656-21L AI in the Sciences and Engineering 2024**

## limitation of PINNS

- computational 
- $\lambda$

---

![myimage19](deepimage/deep35.png)


### PINNS as a ML !


![myimage19](deepimage/deep36.png)
![myimage19](deepimage/deep37.png)


## key scientific tasks


![myimage19](deepimage/deep38.png)


## PINNS for Inverse problems!!

- lectrue 5-intro to physic inform INN at 1:10:00 minutes



![myimage19](deepimage/deep38.png)

![myimage19](deepimage/deep39.png)

![myimage19](deepimage/deep40.png)









## theroy 

![myimage19](deepimage/deep19.png)


- in the pINN for differentiation we use the **Automatic Differentiation** or **Backpropagation**

-   **unriversal approximator!!!!** there exist a NN such that $|u-u_{\theta}|$ goes to zero.


![myimage20](deepimage/deep20.png)
![myimage21](deepimage/deep21.png)



- note that in physic NN we can not use Relu!! since it is not differentiable 

![myimage22](deepimage/deep22.png)
![myimage23](deepimage/deep23.png)



## DO PINNs work?


![myimage24](deepimage/deep24.png)

## when and why do PINNS work for a PDE?

![myimage25](deepimage/deep25.png)
![myimage26](deepimage/deep26.png)



# NN


In traditional neural networks, training data consisting of input-output pairs is essential. However, in Physics-Informed Neural Networks (PINNs), the approach is different. Let's clarify how PINNs work and why they might not need traditional training data in the same way:

### Traditional Neural Networks
- **Training Data**: Consists of input-output pairs (e.g., images and their labels).
- **Training Goal**: Learn a mapping from inputs to outputs by minimizing the error between predictions and actual labels.
- **Loss Function**: Measures the difference between the predicted outputs and the actual labels (e.g., cross-entropy loss for classification).

### Physics-Informed Neural Networks (PINNs)
- **Training Data**: PINNs can still use traditional training data if available, but they primarily rely on the underlying physical laws described by differential equations.
- **Training Goal**: Learn a function that satisfies the differential equations governing the physical system.
- **Loss Function**: Combines data loss (if any data is available) and physics-based loss derived from the differential equations.

### How PINNs Work Without Traditional Training Data
1. **Physical Laws**: The primary source of "training data" is the physical laws, typically expressed as partial differential equations (PDEs). These laws provide constraints that the solution must satisfy.
   
2. **Boundary and Initial Conditions**: Specific values or behaviors at the boundaries or initial points in time/space. These act as additional constraints for the neural network to satisfy.

3. **Residuals**: The difference between the left-hand side and right-hand side of the PDE when the neural network's output is plugged in. Minimizing these residuals ensures that the network's output satisfies the PDE.

### Example in Your Code
In your provided code:
- **Boundary Condition (`t_boundary`)**: This is used to enforce that the solution satisfies certain conditions at specific points.
- **Physics Loss (`t_physics`)**: This enforces that the network's output respects the differential equation across a range of points.

The combined loss function ensures that the neural network learns a solution that adheres to both the boundary conditions and the underlying physical laws.

### Summary
In summary, while traditional neural networks rely on labeled training data to learn a mapping from inputs to outputs, PINNs leverage the physical laws and boundary/initial conditions as their primary "training data." This allows them to learn solutions to differential equations without needing extensive labeled datasets.


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

