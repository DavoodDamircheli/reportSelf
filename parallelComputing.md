<span id="top"></span>

---
Parallel programming journey!
---

# Table of content

- [Brain Storming](#step-1)
- [Learning pathes and resources](#resources)
- [MPI install and configuration](#step-2)

<!-- nd see the changes live -->
<!-- ls  selfTuroring.md | entr pandoc /_ -s -o selfTuroringehtml --css pandoc.css -->


---

# step 1

Multi-threaded programming and MPI (Message Passing Interface) are both approaches used in parallel computing but serve different purposes and operate in distinct environments. Here's a breakdown of their differences and connections:

### Multi-threaded Programming
- **Scope**: Multi-threaded programming is used to execute multiple threads concurrently within a single process. Threads share the process's resources but can operate independently to perform parallel tasks.
- **Memory Model**: It employs a shared memory model where all threads have access to the same shared memory space, allowing for easy communication and data sharing among threads.
- **Use Case**: It's commonly used in applications running on a single computer with multiple cores or processors, enabling the application to perform multiple tasks or handle multiple requests at the same time.
- **Synchronization**: Requires careful management of resources shared among threads to avoid issues like race conditions. Mechanisms like mutexes, locks, and semaphores are used for synchronization.
- **Examples**: POSIX Threads (pthreads), Windows Threads, Java Threads.

### MPI (Message Passing Interface)
- **Scope**: MPI is a protocol and an API for passing messages between processes in a distributed computing environment. Each process has its own memory space.
- **Memory Model**: It uses a distributed memory model where each process operates independently with its own local memory. Processes communicate by sending and receiving messages, which can contain data, instructions, or synchronization signals.
- **Use Case**: MPI is designed for high-performance computing (HPC) applications that run on computer clusters or grid environments, where processes need to communicate across different nodes of a network.
- **Synchronization**: Communication and synchronization between processes are achieved through explicit message passing, which includes sending and receiving data.
- **Examples**: Open MPI, MPICH, Microsoft MPI.

### Connection and Combination
- **Complementary Use**: In practice, MPI and multi-threaded programming are often used together in hybrid models of parallel computing. This approach leverages the benefits of both distributed and shared memory paradigms, allowing for efficient utilization of multi-core processors within nodes (using multi-threading) and communication across nodes in a cluster or grid (using MPI).
- **Efficiency and Scalability**: The hybrid model can offer improved efficiency and scalability, particularly for complex HPC applications that require both intensive computation and significant data exchange between nodes.

In summary, while multi-threaded programming and MPI can be used independently based on the application requirements and the computing environment, combining them can provide a powerful approach to solving large-scale, complex problems in parallel computing,


----
## resources

Parallel computing is a method of performing multiple computations simultaneously to solve a problem faster. Here’s a straightforward, step-by-step guide to understand and implement parallel computing:

### Step-by-Step Guide:

#### 1. **Understand the Basics:**
   - **Concept:** Learn the fundamental concepts of parallel computing, including concurrency, parallelism, and types of parallelism (data parallelism vs. task parallelism).
   - **Architecture:** Familiarize yourself with different parallel computing architectures like multicore processors, clusters, and GPUs.

#### 2. **Learn a Parallel Programming Model:**
   - **Shared Memory Model:** Using threads (e.g., POSIX threads) or higher-level abstractions like OpenMP.
   - **Distributed Memory Model:** Using message passing (e.g., MPI - Message Passing Interface).
   - **Heterogeneous Computing:** Using GPUs (e.g., CUDA for NVIDIA GPUs, OpenCL).

#### 3. **Select a Programming Language:**
   - **For Shared Memory:** C/C++ with OpenMP, Python with multiprocessing/threading, Java with concurrency utilities.
   - **For Distributed Memory:** MPI with C/C++ or Fortran, Python with MPI4Py.
   - **For GPUs:** CUDA with C/C++, PyCUDA, or TensorFlow for machine learning tasks.

#### 4. **Set Up the Environment:**
   - Install necessary software and libraries (e.g., OpenMP, MPI, CUDA toolkit).

#### 5. **Write and Run Simple Programs:**
   - **Shared Memory Example:** A simple matrix multiplication using OpenMP in C.
   - **Distributed Memory Example:** A basic "Hello World" program using MPI.
   - **GPU Example:** Vector addition using CUDA.

#### 6. **Optimize and Debug:**
   - **Profiling Tools:** Use tools to profile your program (e.g., gprof, NVIDIA Visual Profiler).
   - **Debugging Tools:** Use parallel debugging tools (e.g., gdb for MPI, CUDA-GDB).

#### 7. **Scale Up:**
   - **Larger Problems:** Implement more complex algorithms.
   - **Performance Tuning:** Optimize code for better performance (e.g., minimizing communication overhead, balancing workload).

### References and Resources:

#### Books:
1. **"Introduction to Parallel Computing" by Ananth Grama, Anshul Gupta, George Karypis, and Vipin Kumar:**
   - A comprehensive textbook covering the fundamentals and advanced topics in parallel computing.
2. **"Parallel Programming in C with MPI and OpenMP" by Michael J. Quinn:**
   - A practical guide for implementing parallel programs using MPI and OpenMP.

#### Websites:
1. **[OpenMP Official Website](https://www.openmp.org/):**
   - Contains documentation, tutorials, and resources for learning OpenMP.
2. **[MPI Forum](https://www.mpi-forum.org/):**
   - Provides the MPI standard and resources for learning MPI.
3. **[CUDA Zone](https://developer.nvidia.com/cuda-zone):**
   - Official NVIDIA site for CUDA, offering documentation, tutorials, and development tools.

#### Online Courses:
1. **Coursera: "Parallel, Concurrent, and Distributed Programming in Java" by Rice University:**
   - A series of courses on Coursera covering parallel and concurrent programming in Java.
2. **Udacity: "High Performance Computing" by Georgia Tech:**
   - Covers high-performance computing concepts and applications.

#### Tutorials:
1. **[OpenMP Tutorial](https://www.openmp.org/resources/tutorials-articles/):**
   - Provides a series of tutorials on using OpenMP.
2. **[MPI Tutorial](https://mpitutorial.com/):**
   - Offers a comprehensive set of tutorials for learning MPI.
3. **[CUDA by Example](https://developer.nvidia.com/cuda-example):**
   - A book and online resource for learning CUDA programming.

By following these steps and utilizing the recommended resources, you can gain a solid understanding of parallel computing and start implementing parallel programs effectively.







## step 2

To find out the version of MPICH installed on your Ubuntu system, you can use the command line. Open a terminal and enter the following command:

```bash
mpichversion
```

or 

```bash
mpiexec --version
```

Either of these commands will display detailed information about the MPICH installation, including the version number.

##  install specific verison of MPI with intell
To install a specific version of MPICH (such as version 3.3.2 with Intel compiler version 19.0.5) on Ubuntu, you'll need to follow a series of steps since this setup involves using the Intel compilers, which are not typically installed by default on Ubuntu systems. Here's a guide to help you through the process:

### Step 1: Install Intel Compilers
Before you can use the Intel version of MPICH, you'll need the Intel compilers installed.

1. **Get Intel OneAPI:** The Intel compilers are now part of the Intel OneAPI toolkits. You can download them from the [Intel website](https://software.intel.com/content/www/us/en/develop/tools/oneapi/all-toolkits.html). You'll likely need the HPC Toolkit for Fortran and C++ compilers.

2. **Install Intel OneAPI:**
   - Follow the instructions on the website to download and install the toolkit. This typically involves running an installer script.

### Step 2: Download MPICH
You'll need to manually download the specific version of MPICH that corresponds to the version used on your HPC.

1. **Download the Source Code:**
   - Go to the [MPICH downloads page](http://www.mpich.org/downloads/) and download the tar.gz file for version 3.3.2.

### Step 3: Install MPICH
Once you have the Intel compilers and the MPICH source code, you can compile and install MPICH.

1. **Extract the MPICH Archive:**
   ```bash
   tar -xzf mpich-3.3.2.tar.gz
   cd mpich-3.3.2
   ```

2. **Set Up the Environment to Use Intel Compilers:**
   - Load the Intel compilers into your path. If you installed OneAPI, source the setvars.sh script:
     ```bash
     source /opt/intel/oneapi/setvars.sh
     ```

3. **Configure MPICH with Intel Compilers:**
   - Configure the MPICH build system to use the Intel compilers. You might need to specify the compilers explicitly:
     ```bash
     ./configure CC=icc CXX=icpc FC=ifort
     ```


----

## A problem 

go to

```bash

 ls /opt/intel/oneapi/compiler/latest/linux/bin 
````
i don't see ICC instead i have icx, icp and others 

should i adjust this 

```bash
./configure CC=icc CXX=icpc FC=ifort

```



----
4. **Compile and Install MPICH:**
   ```bash
   make
   sudo make install
   ```

### Step 4: Verify Installation
After installing, you can check the version of MPICH to ensure everything is installed correctly:
```bash
mpichversion
```

### Notes:
- Ensure that the Intel compilers are properly licensed or use the free community editions if available.
- Adjust paths and environment settings according to where things are installed on your system.
- This guide assumes you have sudo privileges on your Ubuntu system. If you don't, you'll need to install MPICH in a directory where you have write permissions and adjust your path accordingly.

Following these steps should help you set up MPICH with Intel compilers on your Ubuntu system to match the configuration on your HPC.




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

