<span id="top"></span>


---
Containerizing Perigrain
---

<!--

to run the md file and see the changes live

ls  selfTuroring.md | entr pandoc /_ -s -o selfTuroring.html --css pandoc.css

-->


# Table of content

-[workflow](#step-0)
-[A exprement!!](#step-1)

## step 0

![typical workflow](images/workflow.png)


## step 1

### step 1-1  


- I used the definition file to build a container for mpich3.3.2 with GNU contaienr


- defintion file is "my-mpi-332-GNU.def"


- I test and it is working on my local pc

- the sif file is "mpi-3-3-2-GNU-Compiler-container.sif"


````bash 

mpirun -n 8 singularity exec mpi-3-3-2-GNU-Compiler-container.sif /opt/mpitest


```


### step 1-2


I upload it to HPC to see if it is going to work and if it is compatiable with the LSU HPC or not!!


- **results**: I upload the code and it worked!!!


### step 1-3 

- I creat a run.sh file with the follwing contetns

```bash 
#!/bin/bash
path="`dirname \"$0\"`"
mpirun -n 20 singularity exec /home/davdam/containers/mpi-GNU-Compiler-container.sif /opt/mpitest

```

- and the sumbmition file


```bash 
#!/bin/bash
#PBS -q workq
#PBS -l nodes=1:ppn=20
#PBS -l walltime=1:00:00
#PBS -A hpc_perigrain3
#PBS -N MPI323-Run-sh

module purge
module load mpich/3.3.2/intel-19.0.5

cd $PBS_O_WORKDIR

bash /home/davdam/myHPCprojects/testingMPI/run.sh
```


- **results**: it worked perfectly fine






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

